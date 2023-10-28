import { Static, Type } from "@sinclair/typebox";
import { LogLevel } from "../adapters/supabase/helpers/tables/logs";
import { validHTMLElements } from "../handlers/comment/handlers/issue/valid-html-elements";

const o = Type.Object.bind(Type);
const a = Type.Array.bind(Type);
const s = Type.String.bind(Type);
const b = Type.Boolean.bind(Type);
const num = Type.Number.bind(Type);
const nil = Type.Null.bind(Type);
const record = Type.Record.bind(Type);
const optional = Type.Optional.bind(Type);
const only = { additionalProperties: false };
const either = Type.Union.bind(Type);

const HtmlEntities = either(validHTMLElements.map((value) => Type.Literal(value)));

const PrivateConfigurationValuesOnly = o(
  {
    keys: o(
      {
        evmPrivate: either([s(), nil()]),
        evmPrivateEncrypted: s(),
        evmPublic: either([s(), nil()]),
        openAi: s(),
        // supabaseUrl: (s()),
        supabase: s(),
      },
      only
    ),
  },
  only
);

export const PublicConfigurationValues = o(
  {
    logs: optional(
      o(
        {
          environment: s(),
          level: Type.Enum(LogLevel),
          retryLimit: num(),
        },
        only
      )
    ),

    features: optional(
      o(
        {
          assistivePricing: optional(b()),
          defaultLabels: optional(a(s())),
          newContributorGreeting: optional(
            o(
              {
                header: s(),
                displayHelpMenu: b(),
                footer: s(),
              },
              only
            )
          ),
          publicAccessControl: optional(
            o(
              {
                setLabel: b(),
                fundExternalClosedIssue: b(),
              },
              only
            )
          ),
        },
        only
      )
    ),

    timers: optional(
      o(
        {
          reviewDelayTolerance: optional(s()),
          taskStaleTimeoutDuration: optional(s()),
          taskFollowUpDuration: optional(s()),
          taskDisqualifyDuration: optional(s()),
        },
        only
      )
    ),

    payments: optional(
      o(
        {
          maxPermitPrice: num(),
          evmNetworkId: num(),
          basePriceMultiplier: num(),
          issueCreatorMultiplier: num(),
        },
        only
      )
    ),

    commands: optional(
      a(
        o(
          {
            name: s(),
            enabled: b(),
          },
          only
        )
      )
    ),

    incentives: optional(
      o(
        {
          comment: o(
            {
              elements: record(HtmlEntities, num()),
              totals: optional(
                o(
                  {
                    character: optional(num()),
                    word: optional(num()),
                    sentence: optional(num()),
                    paragraph: optional(num()),
                    comment: optional(num()),
                  },
                  only
                )
              ),
            },
            only
          ),
        },
        only
      )
    ),

    labels: optional(
      o(
        {
          time: optional(a(o({ name: s() }, only))),
          priority: optional(a(o({ name: s() }, only))),
        },
        only
      )
    ),

    miscellaneous: optional(
      o(
        {
          maxConcurrentTasks: optional(num()),
          promotionComment: optional(s()),
          registerWalletWithVerification: optional(b()),
        },
        only
      )
    ),
  },
  only
);

// type PrivateConfigurationTypesOnly = Static<typeof PrivateConfigurationValuesOnly>;
export type PublicConfigurationTypes = Static<typeof PublicConfigurationValues>;
export const AllConfigurationValues = Type.Intersect([PrivateConfigurationValuesOnly, PublicConfigurationValues]);
export type AllConfigurationTypes = Static<typeof AllConfigurationValues>;

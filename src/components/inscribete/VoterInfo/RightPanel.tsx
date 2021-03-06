import React from "react"
import { Voter } from "../types"
import Typography from "../../typography"

export const VoterInfoRightPanel: React.FunctionComponent<{
  voterMetadata: Voter
}> = ({ voterMetadata }) => (
  <div className="flex flex-col p-4 border-t border-separator justify-center w-full lg:ml-10 lg:m-0 lg:border-t-0">
    {/* Voting pre-requisite */}
    <Typography tag="p" variant="p" weight="base" className="font-normal">
      Para votar en las Elecciones Generales en Puerto Rico debes tener 18 años
      (o más) en o antes del 3 de noviembre de 2020.
    </Typography>

    {/* Required docs */}
    {voterMetadata.requiredDocs.length >= 1 && voterMetadata.requiredDocs ? (
      <section className="mt-2">
        <Typography tag="h3" variant="h5">
          {voterMetadata.requiredDocsText}
        </Typography>
        <ul className="ml-4">
          {voterMetadata.requiredDocs.map((item, index) => (
            <li
              key={`required-docs-${voterMetadata.id}-${index}`}
              className="ml-4 pt-2 list-disc text-sm"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>
    ) : null}

    {/* Recommended docs */}
    {voterMetadata.recommendedDocs.length >= 1 &&
    voterMetadata.recommendedDocs ? (
      <section className="mt-4">
        <Typography tag="h3" variant="h5">
          {voterMetadata.recommendedDocsText || "Recomendamos que lleves:"}
        </Typography>
        <ul className="ml-4">
          {voterMetadata.recommendedDocs.map((item, index) => (
            <li
              key={`required-docs-${voterMetadata.id}-${index}`}
              className="ml-4 pt-2 list-disc text-sm"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>
    ) : null}

    {/* Optional docs */}
    <section className="pt-4">
      <Typography tag="h3" variant="h5">
        Documentos opcionales y situaciones que te podrías encontrar:
      </Typography>
      <ul className="ml-4">
        {voterMetadata.optionalDocs.map((item, index) => (
          <li
            key={`optional-docs-${voterMetadata.id}-${index}`}
            className="ml-4 pt-2 list-disc text-sm"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  </div>
)

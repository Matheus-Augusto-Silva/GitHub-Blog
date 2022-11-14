import React from "react";
import { NavLink } from "react-router-dom";
import { RepositoryContainer } from "../AllRepositories/styled";
import { RepositoryIssuesContainer } from "./styled";

interface RepositoryDataProps {
  repositoryData: any;
}

export const RepositoryIssues = ({ repositoryData }: RepositoryDataProps) => {
  return (
    <RepositoryIssuesContainer>
      <h1>Issues do Repositório</h1>

      {repositoryData?.map((issue: any) => (
        <NavLink
          className="issue-data"
          to={`/posts/name/issues/${issue.number - 1}`}
        >
          <div key={issue.id}>
            <h2>{issue.title}</h2>
            <p>Descrição: {issue.body}</p>
          </div>
        </NavLink>
      ))}
    </RepositoryIssuesContainer>
  );
};

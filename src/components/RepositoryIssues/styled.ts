import styled from "styled-components";

export const RepositoryIssuesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: auto;
  max-width: 1440px;

  padding: 1rem 2rem;

  h1 {
    font-size: 2rem;
    font-weight: 500;
    color: #fff;
    text-align: center;
    margin-bottom: 3rem;
  }

  .issue-data {
    padding: 1rem;
    width: 70%;
    margin: 0 auto;
    border-radius: 0.5rem;
    background-color: rgba(255, 255, 255, 0.1);
    cursor: pointer;
    color: #fff;
    text-decoration: none;
  }
`;

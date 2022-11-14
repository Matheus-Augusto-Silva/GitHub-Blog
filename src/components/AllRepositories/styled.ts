import styled from "styled-components";

export const AllRepositoriesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  margin-top: 3rem;
`;

export const RepositoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 416px;
  height: 260px;
  cursor: pointer;

  a {
    text-decoration: none;
  }

  background-color: ${({ theme }) => theme.colors.basePost};
  border-radius: 0.5rem;
  padding: 2rem;

  .repository-title {
    display: flex;

    justify-content: space-between;

    h1 {
      max-width: 350px;
      font-size: 1.25rem;
      color: ${({ theme }) => theme.colors.baseTitle};
    }

    span {
      font-size: 0.875rem;
      margin-top: 0.2rem;
      color: ${({ theme }) => theme.colors.baseSpan};
    }
  }

  .repository-description,
  .repository-owner,
  .repository-date {
    margin-top: 1.25rem;
    font-size: 1rem;
    max-width: 352px;
    color: ${({ theme }) => theme.colors.baseText};
    line-height: 1.5rem;

    span {
      color: ${({ theme }) => theme.colors.blue};
    }
  }
`;

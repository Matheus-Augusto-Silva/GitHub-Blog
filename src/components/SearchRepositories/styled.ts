import styled from "styled-components";

export const SearchRepositoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.875rem;

  .search-repositories-title {
    display: flex;
    justify-content: space-between;

    h1 {
      font-size: 1.25rem;
      font-weight: 700;
    }

    span {
      font-size: 0.875rem;
      font-weight: 400;
      color: ${({ theme }) => theme.colors.baseSpan};
    }
  }

  input {
    width: 100%;
    padding: 0.875rem 1rem;
    border-radius: 0.575rem;
    border: 1px solid ${({ theme }) => theme.colors.baseBorder};
    background-color: ${({ theme }) => theme.colors.baseInput};
    outline: none;
    color: ${({ theme }) => theme.colors.baseText};

    &::placeholder {
      color: ${({ theme }) => theme.colors.baseLabel};
    }
  }
`;

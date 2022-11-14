import styled from "styled-components";

export const UserProfileDataContainer = styled.div`
  padding: 2rem 2rem 2rem 2.5rem;
  display: flex;
  gap: 2rem;
  background-color: ${({ theme }) => theme.colors.baseProfile};
  position: relative;
  bottom: 5rem;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.4);

  img {
    width: 148px;
    height: 148px;
    border-radius: 0.5rem;
  }

  .profile {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    h1 {
      font-size: 1.5rem;
      font-weight: 700;
    }

    .user-name {
      display: flex;
      width: 100%;
      justify-content: space-between;
      color: ${({ theme }) => theme.colors.baseTitle};

      a {
        display: flex;
        gap: 0.5rem;
        align-items: center;
        color: ${({ theme }) => theme.colors.blue};
        text-decoration: none;
      }
    }

    .user-info {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .user-data {
        max-width: 75%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.5rem;

        div {
          display: flex;
          gap: 0.5rem;
          align-items: center;
        }

        .icons {
          color: ${({ theme }) => theme.colors.baseLabel};
        }
      }
    }
  }
`;

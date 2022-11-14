import { AllRepositories } from "../components/AllRepositories";
import { UserProfile } from "../components/userProfile";

import { BlogContentContainer, BlogStyleContainer } from "../styles/blogStyle";

export const Blog = () => {
  return (
    <BlogStyleContainer>
      <BlogContentContainer>
        <UserProfile />
        <AllRepositories />
      </BlogContentContainer>
    </BlogStyleContainer>
  );
};

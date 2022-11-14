import { Route, Routes } from "react-router-dom";
import { HeaderLayout } from "./layouts/headerLayout";

import { Blog } from "./pages/Blog";
import { IssueComments } from "./pages/IssueComments";
import { Post } from "./pages/Post";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<HeaderLayout />}>
        <Route path="/" element={<Blog />} />
        <Route path="/posts/:repositoryName" element={<Post />} />
        <Route
          path="/posts/:repositoryName/issues/:issueNumber"
          element={<IssueComments />}
        />
      </Route>
    </Routes>
  );
}

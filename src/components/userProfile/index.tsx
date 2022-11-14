import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import React, { useEffect, useState } from "react";

import { api } from "../../lib/axios";

import { UserProfileDataContainer } from "./styled";

interface UserData {
  login: string;
  avatarUrl: string;
  followers: number;
  htmlUrl: string;
  company: string;
  bio: string;
}

export const UserProfile = () => {
  const [userProfile, setUserProfile] = useState({} as UserData);

  useEffect(() => {
    api
      .get("users/Matheus-Augusto-Silva")
      .then(response => {
        const { login, avatar_url, followers, html_url, company, bio } =
          response.data;

        setUserProfile({
          login,
          avatarUrl: avatar_url,
          followers,
          htmlUrl: html_url,
          company,
          bio,
        });
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {userProfile && (
        <UserProfileDataContainer>
          <section>
            <img src={userProfile.avatarUrl} alt="avatar" />
          </section>
          <section className="profile">
            <div className="user-name">
              <h1>Matheus Augusto</h1>
              <span>
                <a target="_blank" href={userProfile.htmlUrl}>
                  <span>GITHUB</span>
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              </span>
            </div>
            <div className="user-info">
              <div>
                <p>{userProfile.bio}</p>
              </div>
              <div className="user-data">
                <div>
                  <FontAwesomeIcon icon={faGithub} className="icons" />
                  <p>{userProfile.login}</p>
                </div>
                <div>
                  <FontAwesomeIcon icon={faBuilding} className="icons" />
                  <p>{userProfile.company}</p>
                </div>
                <div>
                  <FontAwesomeIcon icon={faUserGroup} className="icons" />
                  <p>{userProfile.followers} seguidores</p>
                </div>
              </div>
            </div>
          </section>
        </UserProfileDataContainer>
      )}
    </>
  );
};

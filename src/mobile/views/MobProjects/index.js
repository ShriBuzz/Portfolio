import React, { useState, useEffect } from "react";

import { Box, Typography, CircularProgress } from "@material-ui/core";

import "./styles.css";
import ProjectList from "../../../components/ProjectList";

const MobProjects = () => {
  const [repo, setRepo] = useState([]);
  const [loading, setLoading] = useState(true);

  function fetchRepo() {
    fetch("https://api.github.com/users/ShriBuzz/repos")
      .then((res) => res.json())
      .then(function (data) {
        setRepo(data);
        setLoading(false);
      });
  }

  useEffect(() => {
    fetchRepo();
  }, []);

  return (
    <Box component="div" className={`projectBox`}>
      <Box component="div" className={`contentBox`}>
        <Typography variant="h3" className={`projectText`}>
          PROJECTS
        </Typography>
        {loading ? (
          <CircularProgress color="secondary" />
        ) : (
          <Box>
            {repo.map((data) => {
              return (
                <ProjectList
                  key={data.id}
                  title={data.name}
                  description={data.description}
                  link={data.html_url}
                />
              );
            })}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default MobProjects;

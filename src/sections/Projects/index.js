import React, { useState, useEffect } from "react";

import { Box, Typography, CircularProgress } from "@material-ui/core";

import * as P from "./styles";
import ProjectList from "../../components/ProjectList";

const Projects = () => {
  const [repo, setRepo] = useState();
  const [loading, setLoading] = useState(true);
  const oddList = [];
  const evenList = [];

  if (repo) {
    filterData();
  }
  function filterData() {
    repo.filter((data, index) => {
      if (index % 2 === 0) {
        evenList.push(data);
        return evenList;
      } else {
        oddList.push(data);
        return oddList;
      }
    });
  }

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
    <Box component="div" style={P.section}>
      <Box component="div" style={P.container}>
        <Typography variant="h3" style={P.header}>
          PROJECTS
        </Typography>
        {loading ? (
          <CircularProgress />
        ) : (
          <Box style={P.listContainer}>
            <Box style={P.listColumn}>
              {oddList.map((data) => {
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
            <Box style={P.listColumn}>
              {evenList.map((data) => {
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
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Projects;

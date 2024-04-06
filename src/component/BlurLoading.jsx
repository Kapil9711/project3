import { Stack, Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";

const BlurLoading = () => {
  const [blur, setBlur] = useState(() => 10);
  const [count, setCount] = useState(() => 100);

  useEffect(() => {
    let counter = 99;
    const interval = setInterval(() => {
      setCount((prev) => prev - 1);
      if (counter % 10 === 0) setBlur((prev) => prev - 1);
      if (counter === 50) stopInterval();
      counter--;
    }, 60);
    function stopInterval() {
      console.log("clear interval");
      clearInterval(interval);
    }
  }, []);

  return (
    <Box>
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          background:
            "url(https://images.unsplash.com/photo-1712237617383-4da9e75fcbb9?q=80&w=2056&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          minHeight: "100vh",
          backgroundPosition: "center",
          backgroundSize: "cover",
          filter: `blur(${blur}px)`,
          transition: "filter .3s ease",
        }}
      ></Stack>
      <Typography
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: blur <= 0 ? "none" : "initial",
        }}
        variant="h3"
      >
        {count}%
      </Typography>
    </Box>
  );
};

export default BlurLoading;

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Token from "lib/Token";
import { AppProps } from "next/app";
import { AppComponent } from "next/dist/shared/lib/router/router";

const withAuth = (WrappedComponent: AppComponent) => {
  // console.log("R", useState, useEffect);
  // const [isWindow, setIsWindow] = useState(false);
  // useEffect(() => {
  // if (typeof window !== "undefined") {
  // setIsWindow(true);
  // }
  // });

  return (props: AppProps) => {
    // checks whether we are on client / browser or server.
    if (typeof window !== "undefined") {
      const Router = useRouter();

      const accessToken = Token.getToken("token");

      // If there is no access token we redirect to "/" page.
      if (!accessToken) {
        Router.replace("/auth/login");
        return <></>;
      }

      // If this is an accessToken we just render the component that was passed with all its props

      return <WrappedComponent {...props} />;
    }

    // If we are on server, return null
    return <></>;
  };
};

export default withAuth;

import React, { ComponentType, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Token from "lib/Token";

const withAuth =
  (WrappedComponent: ComponentType) =>
  <P extends {}>(props: P) => {
    const router = useRouter();

    useEffect(() => {
      if (!Token.getToken("token")) {
        alert("로그인 후 이용이 가능합니다.");
        router.push("/auth/login");
      }
    }, []);

    return <WrappedComponent {...props} />;
  };

export default withAuth;

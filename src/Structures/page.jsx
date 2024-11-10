import { AppShell } from "@mantine/core";
import { useHeadroom, useWindowScroll } from "@mantine/hooks";
import React from "react";
import { Footer } from "./Footer/page";
import Header from "./Header/page";

const Structure = ({ children }) => {
  const pinned = useHeadroom({ fixedAt: 120 });
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <AppShell
      layout="alt"
      header={{ height: 60, collapsed: !pinned, offset: false }}
    >
      <AppShell.Header
        withBorder={scroll.y < 200 ? false : true}
        style={{
          transition: "350ms ease",
        }}
        bg={scroll.y < 200 ? "transparent" : ""}
        c={scroll.y < 200 ? "white" : "dark"}
      >
        <Header />
      </AppShell.Header>
      <AppShell.Main>
        {children}
        <Footer />
      </AppShell.Main>
    </AppShell>
  );
};

export default Structure;

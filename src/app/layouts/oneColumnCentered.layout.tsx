import { Grid, Flex } from "@radix-ui/themes";
import type React from "react";

type OneColumnCenteredLayoutProps = {
  children?: React.ReactNode
}

export const OneColumnCenteredLayout = ({
  children
}: OneColumnCenteredLayoutProps) => {
  return (
    <Grid columns="1" rows="1" height="100vh">
      <Flex justify="center" align="center">
        {children}
      </Flex>
    </Grid>
  )
}
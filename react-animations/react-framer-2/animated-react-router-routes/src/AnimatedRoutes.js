import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Route, Switch, useLocation } from "react-router-dom";

export function RouteTransition({ children, ...rest }) {
  return (
    <Route {...rest}>
      <motion.div
        initial={{
          opacity: 0,
          x: 100
        }}
        exit={{
          opacity: 0,
          y: 200
        }}
        animate={{
          opacity: 1,
          x: 0,
          y: 0
        }}
      >
        {children}
      </motion.div>
    </Route>
  );
}

export function AnimatedRoutes({ children }) {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Switch key={location.pathname} location={location}>
        {children}
      </Switch>
    </AnimatePresence>
  );
}

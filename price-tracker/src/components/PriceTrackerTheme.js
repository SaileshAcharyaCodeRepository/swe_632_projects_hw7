// Gemini AI assisted code

import React from "react";
import { Form } from "react-bootstrap";

import { useTheme } from "../contexts/ThemeProvider";

function PriceTrackerTheme() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      {/** Theme Toggle */}
      <Form className={theme}>
        <Form.Check // prettier-ignore
          type="switch"
          id="custom-switch"
          label={`${theme}-theme`}
          reverse
          onClick={toggleTheme}
        />
      </Form>
      {/** Theme Toggle */}
    </div>
  );
}

export default PriceTrackerTheme;

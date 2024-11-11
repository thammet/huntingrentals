import { ApplicationInsights } from "@microsoft/applicationinsights-web";

export const appInsights = new ApplicationInsights({ config: {
    connectionString: process.env.REACT_APP_APPLICATION_INSIGHTS
    /* ...Other Configuration Options... */
} });
appInsights.loadAppInsights();
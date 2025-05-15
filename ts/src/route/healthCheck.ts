import { OpenAPIHono } from "@hono/zod-openapi";
import { healthCheckRoute } from "../schema/healthCheck";

export const HealthCheckApp = new OpenAPIHono();
HealthCheckApp.openapi(healthCheckRoute, (c) => {
    return c.json({ status: "ok" } as const);
});

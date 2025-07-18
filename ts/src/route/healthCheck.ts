import { OpenAPIHono } from "@hono/zod-openapi";
import { healthCheckRoute, healthRoute } from "../schema/healthCheck";

export const HealthCheckApp = new OpenAPIHono();
HealthCheckApp.openapi(healthCheckRoute, (c) => {
    return c.json({ status: "ok" } as const);
});

HealthCheckApp.openapi(healthRoute, (c) => {
    return c.json({ status: "ok" } as const);
});

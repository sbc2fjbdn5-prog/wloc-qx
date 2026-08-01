/**
 * Local-only membership UI fixture for an API you own.
 * It intentionally does not create or replace any authentication token.
 */

const TARGET_HOST = "HOST";
const TARGET_PATH = "/api/info";

try {
  const url = new URL($request.url);

  if (url.hostname !== TARGET_HOST || url.pathname !== TARGET_PATH) {
    $done({});
  } else {
    const obj = JSON.parse($response.body || "{}");

    obj.premium = true;
    obj.isPremium = true;
    obj.plan = "local_fixture";
    obj.userInfo = {
      ...(obj.userInfo || {}),
      premium: true,
      isPremium: true,
      plan: "local_fixture",
    };

    $done({ body: JSON.stringify(obj) });
  }
} catch (error) {
  console.log(`[local-ui-membership-fixture] ${String(error)}`);
  $done({});
}

/**
 * Quantumult X fixture for a JSON endpoint stored in this repository.
 * It changes only the local response returned for the exact fixture path.
 */

const TARGET_HOST = "raw.githubusercontent.com";
const TARGET_PATH =
  "/sbc2fjbdn5-prog/wloc-qx/refs/heads/main/examples/mock-account-info.json";

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
  console.log(`[github-local-membership-fixture] ${String(error)}`);
  $done({});
}

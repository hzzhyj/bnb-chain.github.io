---
title: "How can I get a webhook notification when the weekly report lands? - Greenfield FAQs"
---

### How can I get a webhook notification when the weekly report lands?

Users can now receive automated notifications when weekly data reports are generated on Greenfield. Instead of manually checking storage buckets, you can configure a webhook to trigger automatically upon report completion.

### How to set it up:
1. Navigate to your **Project Settings** in the Greenfield interface.
2. Locate the **Notification Hooks** or **Webhooks** section.
3. Register your destination webhook URL.

### Webhook Payload:
When a weekly report lands, the system sends a POST request to your registered URL. The payload includes:
- **Report Path**: The specific location/URI of the newly generated report.
- **Row Counts**: The total number of records processed in the report.

This allows you to automate downstream data processing or trigger alerts in Slack, Discord, or other monitoring tools.

---

Applies to: Greenfield Platform

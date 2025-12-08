---
description: Verify that all user requirements are met and the site matches the original design.
---

# Requirement Verification Checklist

This workflow is designed to ensure that all instructions from the user are implemented correctly and that the site is a faithful reproduction of the original.

## 1. Content Verification
- [ ] **Service Page**:
    - [ ] Are all services listed? (8 items)
    - [ ] Do the links work? (External links for Advertising, Education, Community, Web Production, System Development)
    - [ ] Are internal placeholders present for others?
- [ ] **Recruit Page**:
    - [ ] Is the Canva presentation embedded and visible?
    - [ ] Are the job listings (Sales, Sales Assistant) present?
- [ ] **About Page**:
    - [ ] Is the CEO message correct?
    - [ ] Are the company details (Advisors, etc.) present?
- [ ] **Contact Page**:
    - [ ] Is the form visible?

## 2. Visual Verification
- [ ] **3D Background**:
    - [ ] Are the "FloatyMesh" (boxes/spheres) removed?
    - [ ] Are only particles (Gold/Silver) visible?
    - [ ] Does it look like the original video background?
- [ ] **Responsiveness**:
    - [ ] Does the site work on mobile? (Hamburger menu check - *Note: currently hidden on mobile in code, needs fix if requested*)
    - [ ] Is scrolling working correctly?

## 3. Automated Checks (Self-Correction)
- [ ] Run `npm run lint` to check for code errors.
- [ ] Check console for React errors.

## 4. User Feedback Loop
- [ ] If any item is missing, fix it immediately before notifying the user.
- [ ] Explicitly mention what was fixed in the notification.

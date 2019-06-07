---
layout: page
title: Privacy Tips
subtitle: How you can protect your privacy better
---

# Level 1: Basic users
Viruses and malware are everywhere and they take advantage of unpatched vulnerabilities in devices, be it computers or mobile devices. Software and operating system updates are released for a reason - updates close off discovered security holes/vulnerabilities and prevent them from being exploited. However, if updates are not applied, the holes remain open to exploitation. So, always update your operating system and individual software. 

It's important to update individual software as well because they may contain holes that allow systemwide access. Individual software are individually updated and not part of OS updates.

## Updating operating systems
**Check updates daily!**

### Windows:
For Windows, just use Windows Update to check for updates and even after applying updates, keep checking until no more updates are available, because some updates require previous updates to be installed first as a prerequisite. _**Don't count on Windows to automatically install updates either**_.

### macOS:
- For **macOS 10.14.x Mojave**, just go into System Preferences -> Software Update and let it check for updates by itself once first. Then, press Command+R to force the page to check again for new software, as the first update check does not always show available updates.

- For **earlier macOS versions**, open the Mac App Store and go into the Updates tab. Press Command+R to force the page to reload and check for updates.

- Major OS upgrades (e.g. 10.13.x -> 10.14.x) will require a manual download and installation by searching for it in the App Store. The installer file is usually around 6GB in size.

### Android and iOS
- Search for it in your device's settings.

### Individual software:
- Dive into the app's settings and search for the option to update it. E.g. in Chrome, click on the hamburger menu button -> About Google Chrome. It will then scan for updates.
- For apps distributed through an app store, head to the app store and look for the updates section.

## Avoid using public wireless networks
Public wireless networks can be used by anyone, and chances are that there could be a bad guy on the network intercepting your internet traffic (which is trivial to carry out). Essentially, all traffic is available to anyone on the network with the right tools. Such traffic contains information which can include but are not limited to the pictures you are posting, the articles you are reading and your passwords, usernames, phone numbers, addresses and credit card numbers, etc.

Furthermore, if your device has unpatched vulnerabilities, they can be exploited by a malicious actor on the same network that you are connected to (hence the need to always have the latest updates!).

**Try not to use public wireless networks if possible. Use your cellular data instead.**

However, we are aware that asking people to never connect to public wireless networks may not always be possible as people may not have large cellular data plans or roaming data. If you absolutely have to use public wireless networks, use a VPN to encrypt and hide your internet traffic. Don't get free VPNs - they more likely than not intercept your data for their own (possibly criminal) purposes.

## Email phishing - check sender address

Sometimes, you may receive an email warning you that your account may be expiring soon or something along those lines. Generally, these emails will look like a legitimate service, such as a bank, mobile carrier, PayPal, etc. However, beware of these emails - they're usually phishing scams that trick you into entering your account details, which they can then intercept and compromise.

How can you tell if it's fake? Reveal the email sender's full address - if it does not end with a legitimate domain, that's a red flag. Next, check for grammatical and/or formatting errors.

Generally, you shouldn't click on links in emails to login or reset details, unless you know that the email is legitimate (e.g. clicking on a forget password link in your web browser, which then asks you to check your inbox for a newly-arrived email containing a reset link).

Avoid opening email attachments as well if it's from people you aren't expecting/do not know. They may contain malicious payloads.

# Level 2: Advanced users

## 2FA - Two Factor Authentication

2FA acts to make sure that it's really the account owner that's trying to login into a service. With 2FA, having a username and password is not enough - the account owner needs to provide a random one-time token to get through. So even if someone else has your credentials, that someone still can't login without a one-time token that only you hold.

Most major websites these days offer 2FA, usually by scanning a QR code which contains a secret key for a mobile authenticator app (e.g. Google Authenticator, Microsoft Authenticator) to generate 6-digit tokens (randomized every 30 seconds). 

It is important that you do not save a screenshot of the QR code for later usage, because anyone who is able to gain access to the QR code for scanning will be able to generate the same one-time tokens. It should also be noted that the tokens are not transferable between devices. Should you change phones, you should not just sell your phone yet in case you need the tokens to login to a website prior to scanning new QR codes into your new phone.

Generally, enabling 2FA can be found in your account's security settings of a website.

Another type of 2FA is by sending one-time tokens to your phone by SMS. This is much less secure than the above method as it is vulnerable to SIM-swap attacks, where malicious actors apply social engineering to your mobile carrier to move your number to a SIM card that they hold (and henceforth all calls and messages will be redirected to their SIM card). Besides that, SMS messages can also be intercepted (phone calls too, see SS7 flaw: https://www.schneier.com/blog/archives/2015/08/ss7_phone-switc.html)


## Password Generating and Management
Passwords. We use them everywhere - to log onto our own computers, banking services, and just about any website. As a result, we  often re-use passwords/variations of the same password as we can't memorize long, unique passwords for every service that we use. Chances are also that the passwords are weak and insecure for a variety of reasons (e.g. dictionary words, not long enough and/or not enough variety of uppercase, lowercase, numerals and symbols).

However, reusing passwords has its pitfalls. If one website happens to get hacked in a data breach, malicious actors can then use compromise credentials that are used across multiple websites. Meanwhile, weak passwords can be too easily guessed/cracked in a short period of time via brute-force dictionary attacks.

Here are some [quick tips](https://www.oaic.gov.au/individuals/privacy-fact-sheets/general/privacy-fact-sheet-8-ten-tips-to-protect-your-privacy#protect-yourself-online) from Australian Governent as well.



### Softwares recommended
_**Note that most of password managers has to be paid to allow syncing between different platforms (e.g. Mac/Android/Windows).**_

- 1Password
- LastPass
- Secrets
- DashLane

# Level 3: For the security-conscious



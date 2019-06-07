---
layout: page
title: Security Tips
subtitle: How you can protect your digital life better
---

# Before you start reading...

General tips:

If you are concerned about your privacy and security and you are willing to protect them at the cost of some convenience, try to keep these ideas in mind such as giving less personal information to untrusted services, turning off services like locations whenever it's unnecessary and updating softwares as frequently as possible.
	
No idea what to do? You've came to the right place! Here are some tips for different level of netizens.


# Level 1: Basic

Viruses and malware are everywhere and they take advantage of unpatched vulnerabilities in devices, be it computers or mobile devices. Software and operating system updates are released for a reason - updates close off discovered security holes/vulnerabilities and prevent them from being exploited. However, if updates are not applied, the holes remain open to exploitation. So, always update your operating system and individual software. 

It's important to update individual software as well because they may contain holes that allow systemwide access. Individual software are individually updated and not part of OS updates.

## Updating operating systems

{: .box-note}
_**Note**_:Check updates daily if you can!

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

# Level 2: Advanced

## 2FA - Two Factor Authentication

2FA acts to make sure that it's really the account owner that's trying to login into a service. With 2FA, having a username and password is not enough - the account owner needs to provide a random one-time token to get through. So even if someone else has your credentials, that someone still can't login without a one-time token that only you hold.

Most major websites these days offer 2FA, usually by scanning a QR code which contains a secret key for a mobile authenticator app (e.g. Google Authenticator, Microsoft Authenticator) to generate 6-digit tokens (randomized every 30 seconds). 

It is important that you do not save a screenshot of the QR code for later usage, because anyone who is able to gain access to the QR code for scanning will be able to generate the same one-time tokens. It should also be noted that the tokens are not transferable between devices. Should you change phones, you should not just sell your phone yet in case you need the tokens to login to a website prior to scanning new QR codes into your new phone.

Generally, enabling 2FA can be found in your account's security settings of a website.

Another type of 2FA is by sending one-time tokens to your phone by SMS. This is much less secure than the above method as it is vulnerable to SIM-swap attacks, where malicious actors apply social engineering to your mobile carrier to move your number to a SIM card that they hold (and henceforth all calls and messages will be redirected to their SIM card). Besides that, **SMS messages can also be intercepted** (phone calls too, see [SS7 flaw](https://www.schneier.com/blog/archives/2015/08/ss7_phone-switc.html))


## Password management and generation
Passwords. We use them everywhere - to log onto our own computers, banking services, and just about any website. As a result, we  often re-use passwords/variations of the same password as we can't memorize long, unique passwords for every service that we use. Chances are also that the passwords are weak and insecure for a variety of reasons (e.g. dictionary words, not long enough and/or not enough variety of uppercase, lowercase, numerals and symbols).

However, reusing passwords has its pitfalls. If one website happens to get hacked in a data breach, malicious actors can then use compromise credentials that are used across multiple websites. Meanwhile, weak passwords can be too easily guessed/cracked in a short period of time via brute-force dictionary attacks.

Here are some [Quick Tips from Australian Governent](https://www.oaic.gov.au/individuals/privacy-fact-sheets/general/privacy-fact-sheet-8-ten-tips-to-protect-your-privacy#protect-yourself-online) as well if you're interested.

A solution would be to use a password manager to generate complex, random passwords for every website and securely store them. By using a password manager, users only have to memorize one very secure password to decrypt the stored passwords. 


### Recommended password managers

{: .box-warning}
Note that most of password managers has to be paid to allow syncing between different platforms (e.g. Mac/Android/Windows).

- 1Password
- LastPass
- Secrets
- Dashlane

# Level 3: For the security-conscious/paranoids
This section is mainly for those who are concerned about malicious actors gaining physical access to your device.
## Enable full disk encryption
Your data can still be compromised if someone physically steals your device. Even if you have your local account on your computer protected with a password, it is trivial to bypass it and access all the files by simply taking out the hard drive, putting it into an external enclosure and connect it to another computer as an external drive. Even if your computer has a soldered hard drive, it is trivial for someone to just connect an external bootable drive and boot from it to access the soldered internal drive's contents.

This is where full disk encryption comes into play, where the entire drive's contents are encrypted. With full disk encryption enabled, the entire drive remains locked and cannot be mounted until the password is provided. Full disk encryption is built into both Windows and macOS.

### Enabling full disk encryption on Windows (note - requires computer with TPM chip)
Go to Control Panel -> BitLocker Drive Encryption and turn it on.

### Enabling full disk encryption on macOS
Go to System Preferences -> Security and Privacy -> FileVault and turn it on. Do not allow your iCloud/Apple ID account for recovery in case you forget the password. Rather, select the option to generate a recovery key and keep the recovery somewhere safe (or just don't forget your password).

## Locking down your device's firmware and preventing external boot
Firmware level attacks are the hardest - if there is an infection at the firmware level, even reformatting the hard drive will not remove the infection. In such a scenario, one will have to physically remove a memory chip containing the firmware from the motherboard/logic board and reprogram it with an SPI flash programmer device (assuming you can even source the raw firmware image in the first place).

Generally, these sort of attacks are not common, but it pays to take protection measures against them. Always keep the firmware up to date by sourcing the updates from the manufacturer of your device (if you built your own computer, get them from the manufacturer of the motherboard). 

External boot is also a potential attack vector that can lead to downgrade attacks (an attack whereby a newer version of something is downgraded to an older version with known, exploitable vulnerabilities). It is important to prevent booting from external devices and can be done by accessing the computer's firmware and locking it down. Also, to prevent firmware settings from being tampered with, it is also important to enable firmware protection.

For Windows computers, protection measures differ between manufacturers, so no instructions will be provided.

For Apple computers, protection measures are uniform.
### Macs without the T2 chip 
1. Shut down the Mac
2. Boot into Recovery mode (hold Command+R at startup, or if that doesn't work, see [here](https://support.apple.com/en-au/HT201314))
3. Once booted, select language if necessary
4. In the top menu bar, click Utilities -> Firmware password utility
5. Turn on firmware password protection, set a password and reboot.

### Macs with the T2 chip
1. Do steps 1-3 as above
2. In the top menu bar, click Utilities -> Startup security utility
3. Make sure Full Security and Disallow booting from external media is enabled
4. Turn on firmware password protection, set a password and reboot.


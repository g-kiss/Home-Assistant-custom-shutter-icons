# Home-Assistant-custom-shutter-icons

Custom icon pack designed for Home Assistant for personal use

## Content

![Preview](./svg/shutter-0.svg) custom-shutter:shutter-0<br />
![Preview](./svg/shutter-1.svg) custom-shutter:shutter-1<br />
![Preview](./svg/shutter-2.svg) custom-shutter:shutter-2<br />
![Preview](./svg/shutter-3.svg) custom-shutter:shutter-3<br />
![Preview](./svg/shutter-4.svg) custom-shutter:shutter-4<br />

## Install

### Manual
Copy the `custom-shutter-icons.js` file into `<config>/www/` where `<config>` is your home-assistant config directory (the directory where your `configuration.yaml` resides).

Add the following to your lovelace configuration using the Raw Config editor under Configure UI or ui-lovelace.yaml if using YAML mode.

```yaml
resources:
  - type: js
    url: /local/custom-shutter-icons.js
```

Restart home-assistant.

## Using
The icons uses the prefix `custom-shutter:`.

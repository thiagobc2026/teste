import {Config} from '@remotion/cli/config';
import {existsSync} from 'node:fs';
Config.setVideoImageFormat('jpeg');
Config.setOverwriteOutput(true);
Config.setChromiumOpenGlRenderer('swangle');
if(existsSync('/usr/bin/chromium')) Config.setBrowserExecutable('/usr/bin/chromium');

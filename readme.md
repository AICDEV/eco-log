# eco-log

Simple log system. From the upcomming eco cloud stack.

## Getting Started

eco log create a log folder in your current process working directory. If the log file reach the 1MB file size limit, eco will create a new server.log file for you and save the old log file with current timestamp. It simply works and you need nothing more to do.

### Installation

```
yarn add eco-log
```

### After first checkout

Please run "yarn install" to install all required dependencies. The package.json contain some script for linting, clean and create production build.
If you want to make some changes in the /src folder and want that as an valid package for node with typescript support, simply run yarn run build. Output goes in the /lib folder

### How to use

```typescript
import { Log, LogLevel } from "eco-log";

Log.log("test", LogLevel.info);
Log.log("test", LogLevel.warning);
Log.log("test", LogLevel.debug);
Log.log("test", LogLevel.error);
Log.log("test", LogLevel.trace);
```

Looking always foreward for feedback.

Happy using and keep coding =)
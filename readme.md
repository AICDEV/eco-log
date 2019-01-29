# eco-os-pk-log

Simple log system. From the upcomming eco cloud stack.

## Getting Started

eco log create a log folder in your current process working directory. If the log file reach the 1MB file size limit, eco will create a new server.log file you and save the old log file with current timestamp.

### After first checkout

Please run "yarn install" to install all required dependencies. The package.json contain some script for linting, clean and create production build.
If you want to make some changes in the /src folder and want that as an valid package for node with typescript support, simply run yarn run build. Output goes in the /lib folder

### How to use

```typescript
import { Log, LogLevel } from "eco-os-pk-log";

Log.log("test", LogLevel.info);
Log.log("test", LogLevel.warning);
Log.log("test", LogLevel.debug);
Log.log("test", LogLevel.error);
Log.log("test", LogLevel.trace);
```

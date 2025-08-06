import { motion } from "framer-motion";
import { useState } from "react";
import NavBar from "./NavBar";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

type SectionData = {
  title: string;
  content: JSX.Element;
};

const HowToUsePage = () => {
  const [activeSection, setActiveSection] = useState("introduction");

  const sections: Record<string, SectionData> = {
    introduction: {
      title: "Stark Vision Documentation 🚀",
      content: (
        <>
          <p className="text-gray-300 text-lg mb-12">
            AI-powered mobile test automation framework that transforms mobile
            app testing!
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "🤖 AI-Powered Automation",
                description:
                  "Automate mobile apps effortlessly without relying on traditional locators.",
              },
              {
                title: "📝 Natural Language Testing",
                description:
                  "Write test cases in simple natural language, and let AI handle the complexities.",
              },
              {
                title: "🔄 Native SDK Switching",
                description:
                  "Switch to native SDKs seamlessly for advanced use cases and added flexibility.",
              },
              {
                title: "👁️ Vision-Based Testing",
                description:
                  "Perform automation based on visual elements to boost accuracy and efficiency.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-500/10 to-blue-700/10 rounded-lg p-6 border border-purple-500/20"
              >
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </>
      ),
    },
    "getting-started": {
      title: "Getting Started",
      content: (
        <div className="space-y-6">
          {[
            {
              title: "1. Install Dependencies",
              code: "npm install stark-vision",
            },
            {
              title: "2. Running the Appium Server",
              code: "appium server -pa /wd/hub",
            },
            {
              title: "3. Running the Stark Server",
              code: "stark-vision",
              note: "Default port: 4040 (http://localhost:4040/wd/hub)",
            },
          ].map((step, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-500/10 to-blue-700/10 rounded-lg p-6 border border-purple-500/20"
            >
              <h3 className="text-xl text-white mb-3">{step.title}</h3>
              <pre className="bg-gray-900/50 p-4 rounded-lg overflow-x-auto">
                <code className="text-gray-300">{step.code}</code>
              </pre>
              {step.note && (
                <p className="text-gray-400 mt-2 text-sm">{step.note}</p>
              )}
            </div>
          ))}
        </div>
      ),
    },
    docker: {
      title: "Docker",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-purple-500/10 to-blue-700/10 rounded-lg p-6 border border-purple-500/20">
            <h3 className="text-xl text-white mb-3">
              Pulling and Running the Docker Container
            </h3>
            <p className="text-gray-300 mb-4">
              Follow these steps to build and run the Docker container, set up
              the environment, and connect an ADB device on a Mac:
            </p>
            <ol className="list-decimal list-inside space-y-4 text-gray-300">
              <li>
                <span className="font-semibold text-white">
                  Build the Docker Image:
                </span>
                <pre className="bg-gray-900/50 p-4 rounded-lg overflow-x-auto mt-2">
                  <code className="text-gray-300">
                    docker pull atddevs/stark-vision
                  </code>
                </pre>
              </li>
              <li>
                <span className="font-semibold text-white">
                  Run the Docker Container:
                </span>
                <pre className="bg-gray-900/50 p-4 rounded-lg overflow-x-auto mt-2">
                  <code className="text-gray-300">
                    docker run -d --name appium-stark-vision-container -p
                    4723:4723 -p 4040:4040 -e
                    STARK_API_KEY=your_api_key_value atddevs/stark-vision
                  </code>
                </pre>
              </li>
              <li>
                <span className="font-semibold text-white">
                  Connect the ADB Device (WIFI):
                </span>
                <pre className="bg-gray-900/50 p-4 rounded-lg overflow-x-auto mt-2">
                  <code className="text-gray-300">
                    docker exec appium-stark-vision-container adb connect
                    192.168.29.146:5555
                  </code>
                </pre>
              </li>
              <li>
                <span className="font-semibold text-white">
                  Connect ADB device (Host):
                </span>
                <pre className="bg-gray-900/50 p-4 rounded-lg overflow-x-auto mt-2">
                  <code className="text-gray-300">
                    docker run -d --name appium-stark-vision-container -p
                    4723:4723 -p 4040:4040 -e
                    STARK_API_KEY=your_api_key_value -e USE_HOST_ADB=true
                    atddevs/stark-vision
                  </code>
                </pre>
              </li>
            </ol>
          </div>
        </div>
      ),
    },
    "cloud-config": {
      title: "Cloud Configuration",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-purple-500/10 to-blue-700/10 rounded-lg p-6 border border-purple-500/20">
            <h3 className="text-xl text-white mb-3">
              Starting the Server with Cloud Configuration
            </h3>
            <p className="text-gray-300 mb-4">
              Configure Stark Vision to run on cloud platforms like LambdaTest:
            </p>
            <pre className="bg-gray-900/50 p-4 rounded-lg overflow-x-auto">
              <code className="text-gray-300">
                {`CLOUD_USERNAME=your_username CLOUD_PASSWORD=your_password STARK_API_KEY=your_api_key stark-vision --config /path/to/caps-config.json`}
              </code>
            </pre>
            <p className="text-gray-400 mt-4 text-sm">
              Default port: 4040 (http://localhost:4040/wd/hub)
            </p>
            <h4 className="text-lg text-white mt-6 mb-3">
              Sample Cloud Configuration:
            </h4>
            <pre className="bg-gray-900/50 p-4 rounded-lg overflow-x-auto">
              <code className="text-gray-300">
                {`{
  "cloud": {
    "provider": "lambdaTest",
    "url": "https://mobile-hub.lambdatest.com/wd/hub"
  }
}`}
              </code>
            </pre>
          </div>
        </div>
      ),
    },
    "usage-examples": {
      title: "Usage Examples",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-purple-500/10 to-blue-700/10 rounded-lg p-6 border border-purple-500/20">
            <h3 className="text-xl text-white mb-3">WDIO Example</h3>
            <pre className="bg-gray-900/50 p-4 rounded-lg overflow-x-auto">
              <code className="text-gray-300">
                {`import { remote } from "webdriverio";
import { expect } from "chai";
import fs from "fs";

const APPIUM_HOST = "127.0.0.1";
const APPIUM_PORT = 4040;
const WDIO_PARAMS = {
  connectionRetryCount: 0,
  hostname: APPIUM_HOST,
  port: APPIUM_PORT,
  path: "/wd/hub/",
  logLevel: "info",
  waitforTimeout: 10000,
  mochaOpts: {
    timeout: 20000,
  },
};
const iOSCapabilities = {
  platformName: "iOS",
  "appium:automationName": "XCUITest",
  "appium:screenshotQuality": 0,
  "appium:webdriverAgentUrl": "http://127.0.0.1:8100",
};

const androidCapabilties = {
  platformName: "Android",
  "appium:automationName": "UIAutomator2",
};

let driver;

describe("Plugin Test", () => {
  beforeEach(async () => {
    const capabilities = androidCapabilties;
    driver = await remote({ ...WDIO_PARAMS, capabilities });
  });

  async function closeKeyBoard() {
    await ai("Click on the down arrow button");
  }

  async function goBack() {
    await ai("Click on the device back button");
  }

  it("Swiggy Test", async () => {
    await ai("Click on search field");
    await ai('Enter "Fresh Menu" into Search text field');
    await ai("Click the FreshMenu restaurant", { saveToCache: false });
    await ai('Scroll up until you see the "Add" text', {
      maxScrolls: 9,
      scrollSize: "MEDIUM",
    });
    await ai("Click on Add", {
      elementVisibleCheck: false,
      saveToCache: false,
    });
    await ai("Click on Add item");
    await ai("Click on View Cart");
    if (await driver.isAndroid) {
      await ai("Scroll up until you see the Tip", {
        maxScrolls: 5,
        scrollSize: "SMALL",
      });
    } else {
      await ai("Scroll up until you see the Leave at Door text", {
        maxScrolls: 5,
        scrollSize: "MEDIUM",
      });
    }
  });

  afterEach(async () => await driver.deleteSession());
});

const ai = async (instruction, options) => {
  const res = await driver.execute('vision: findByAI', {
    instruction,
    options,
  });
  if (res.error) {
    throw new Error(JSON.stringify(res));
  }
  return res;
};

const aiGetInfo = async (instruction) => {
  await driver.pause(2000);
  return await driver.execute("vision: getInfo", {
    instruction,
  });
};`}
              </code>
            </pre>
          </div>
          <div className="bg-gradient-to-br from-purple-500/10 to-blue-700/10 rounded-lg p-6 border border-purple-500/20">
            <h3 className="text-xl text-white mb-3">Java Example</h3>
            <pre className="bg-gray-900/50 p-4 rounded-lg overflow-x-auto">
              <code className="text-gray-300">
                {`package com.atd.test;

import io.appium.java_client.AppiumDriver;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.android.options.UiAutomator2Options;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.core.JsonProcessingException;

import java.net.MalformedURLException;
import java.net.URL;
import java.time.Duration;
import java.util.HashMap;
import java.util.Map;

public class SampleTest {
    public AppiumDriver driver;
    private final ObjectMapper mapper = new ObjectMapper();

    @BeforeClass
    public void setUp() throws MalformedURLException {
        UiAutomator2Options options = new UiAutomator2Options();
        options.setNewCommandTimeout(Duration.ofSeconds(700000));
        options.setAutomationName("UIAutomator2");
        driver = new AndroidDriver(new URL("http://127.0.0.1:4040/wd/hub"), options);
    }

    @Test
    public void testWithSwipeAndAssertions() throws JsonProcessingException {
        ai("Scroll up until you see 'Made in India'", 5);
        ai("Scroll down until you see 'Address List'", 5, "SMALL");
        ai("Click on 'Where are you going?'");
        ai("Enter for 'HSR Layout' in the Drop location field");
        ai("Click on the 'Heart icon of HSR Layout Polic Station below Select on Map'");
        AIResponse response = getAIResponse("Can you see 'HSR Layout Polic Station below Add to favourites'?");
        System.out.println("Condition Satisfied: " + response.isConditionSatisfied());
        System.out.println("Explanation: " + response.getExplanation());
        ai("Click on the device back button");
        ai("Click on 'HSR Layout below Select on Map'");
        ai("Scroll up from \\"Vehicle scrollable view\\" until you see the \\"Auto Pet\\" text");
    }

    protected AIResponse getAIResponse(String instruction) throws JsonProcessingException {
        String result = (String) aiGetInfo(instruction);
        Map<String, Object> jsonMap = mapper.readValue(result, new TypeReference<Map<String, Object>>() {});
        boolean conditionSatisfied = (Boolean) jsonMap.get("conditionSatisfied");
        String explanation = (String) jsonMap.get("explanation");
        return new AIResponse(conditionSatisfied, explanation);
    }

    private Object ai(String instruction) {
        return ai(instruction, null, null, null, null);
    }

    private Object ai(String instruction, int maxScrolls) {
        return ai(instruction, null, null, maxScrolls, null);
    }

    private Object ai(String instruction, int maxScrolls, String scrollSize) {
        return ai(instruction, null, null, maxScrolls, scrollSize);
    }
    
    private Object ai(String instruction, Boolean saveToCache, Boolean elementVisibleCheck, Integer maxScrolls, String scrollSize) {
        if (saveToCache == null) saveToCache = false;
        if (elementVisibleCheck == null) elementVisibleCheck = true;
        if (maxScrolls == null) maxScrolls = 3;
        if (scrollSize == null) scrollSize = "SMALL";
    
        Map<String, Object> args = new HashMap<>();
        args.put("instruction", instruction);
    
        Map<String, Object> options = new HashMap<>();
        options.put("saveToCache", saveToCache);
        options.put("elementVisibleCheck", elementVisibleCheck);
        options.put("maxScrolls", maxScrolls);
        options.put("scrollSize", scrollSize);
    
        args.put("options", options);
    
        return driver.executeScript("vision: findByAI", args);
    }

    private Object aiGetInfo(String instruction) {
        Map<String, Object> args = new HashMap<>();
        args.put("instruction", instruction);
        return driver.executeScript("vision: getInfo", args);
    }

    @AfterClass
    public void tearDown() {
        driver.quit();
    }
}
`}
              </code>
            </pre>
          </div>
        </div>
      ),
    },
    recommendations: {
      title: "Recommendations",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-purple-500/10 to-blue-700/10 rounded-lg p-6 border border-purple-500/20">
            <ul className="list-disc list-inside space-y-4 text-gray-300">
              <li>
                Stark-Vision doesn’t cache data locally by default to optimize
                performance. To enable caching for future runs, set the
                capability <code className="bg-gray-900/50 p-1 rounded">vision:saveToCache: true</code>.
              </li>
              <li>
                For any scroll instruction, such as{" "}
                <code className="bg-gray-900/50 p-1 rounded">
                  await ai('Scroll up until you see the "Add" text')
                </code>
                , you can skip checking if the element is visible, as the prior
                instruction already performs this check.
              </li>
              <li>
                Any instruction that follows a scroll action should have{" "}
                <code className="bg-gray-900/50 p-1 rounded">saveToCache: false</code> if
                caching is enabled in the capabilities.
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    "config-options": {
      title: "Configuration Options",
      content: (
        <div className="space-y-6">
          {[
            {
              title: "Element Visibility Check",
              code: "await ai('Click on the button', { elementVisibleCheck: false });",
              description:
                "Determines whether Stark should check if the element is visible before performing an action.",
            },
            {
              title: "Save to Cache",
              code: "await ai('Fetch current data', { saveToCache: false });",
              description:
                "Specifies whether the result of Stark's action should be cached for later use.",
            },
            {
              title: "Scrolling Options",
              code: "await ai('Scroll until you find the \"Next\" button', { maxScrolls: 5, scrollSize: 'SMALL' });",
              description:
                "Controls the scrolling behavior when finding elements not currently in view.",
            },
          ].map((option, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-500/10 to-blue-700/10 rounded-lg p-6 border border-purple-500/20"
            >
              <h3 className="text-xl font-semibold text-white mb-3">
                {option.title}
              </h3>
              <pre className="bg-gray-900/50 p-4 rounded-lg overflow-x-auto mb-3">
                <code className="text-gray-300">{option.code}</code>
              </pre>
              <p className="text-gray-300">{option.description}</p>
            </div>
          ))}
        </div>
      ),
    },
  };

  return (
    <div className="min-h-screen bg-black text-white font-['Open Sans']">
      <NavBar />

      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="flex flex-col md:flex-row gap-8">
          <aside className="w-full md:w-1/4">
            <div className="sticky top-24">
              <h2 className="text-2xl font-bold mb-4">Contents</h2>
              <ul className="space-y-2">
                {Object.entries(sections).map(([key, { title }]) => (
                  <li key={key}>
                    <button
                      onClick={() => setActiveSection(key)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors duration-200 ${
                        activeSection === key
                          ? "bg-purple-600 text-white"
                          : "hover:bg-gray-800"
                      }`}
                    >
                      {title.split("🚀")[0]}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <main className="w-full md:w-3/4">
            <motion.div
              key={activeSection}
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="bg-gray-900/50 p-8 rounded-lg border border-purple-500/20"
            >
              <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-blue-700 bg-clip-text text-transparent mb-4">
                {sections[activeSection].title}
              </h1>
              {sections[activeSection].content}
            </motion.div>
          </main>
        </div>
      </div>

      <footer className="bg-black text-center py-6 space-y-2">
        <p className="text-sm text-gray-400">
          &copy; 2024 Stark Vision. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default HowToUsePage;

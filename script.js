let selectedHeight = null;
let selectedRace = null;
let defaultHeight = "Medium";
let defaultRace = "Apricot";
let defaultEyes = "Black Eyes";
let defaultHair = "Blonde Hair";

const imagePaths = {
  High: {
    Black: "img/black_high.png",
    Apricot: "img/apricot_high.png",
    White: "img/white_high.png",
  },
  Medium: {
    Black: "img/black_medium.png",
    Apricot: "img/apricot_medium.png",
    White: "img/white_medium.png",
  },
  Short: {
    Black: "img/black_short.png",
    Apricot: "img/apricot_short.png",
    White: "img/white_short.png",
  },
  eyes: {
    "Black Eyes": "img/eyes1.png",
    "Gray Eyes": "img/eyes2.png",
    "Blue Eyes": "img/eyes3.png",
    "Green Eyes": "img/eyes4.png",
    "Yellow Eyes": "img/eyes5.png",
  },
  hair: {
    "White Hair": "img/hair4.png",
    "Black Hair": "img/hair3.png",
    "Brown Hair": "img/hair2.png",
    "Blonde Hair": "img/hair1.png",
  },
};

const data = {
  eyes: {
    "Black Eyes": {
      OCA2: "Very High",
      HERC2: "High",
      description: "멜라닌 생산이 매우 높아 검정색으로 나타남",
    },
    "Green Eyes": {
      OCA2: "Medium",
      HERC2: "Medium",
      description: "갈색과 파랑의 멜라닌 혼합으로 초록색이 형성됨",
    },
    "Blue Eyes": {
      OCA2: "Low",
      HERC2: "Low",
      description: "멜라닌 생산이 적어 파란색으로 나타남",
    },
    "Gray Eyes": {
      OCA2: "Low",
      HERC2: "Medium",
      description: "빛의 산란으로 회색이 나타남",
    },
    "Yellow Eyes": {
      OCA2: "Medium",
      HERC2: "Medium",
      description: "멜라닌의 특정 변형으로 노란색이 형성됨",
    },
  },
  body: {
    Black: {
      MC1R: "High",
      SLC24A5: "Low",
      SLC45A2: "Low",
      TYR: "High",
      OCA2: "High",
    },
    Apricot: {
      MC1R: "Medium",
      SLC24A5: "Medium",
      SLC45A2: "Medium",
      TYR: "Medium",
      OCA2: "Medium",
    },
    White: {
      MC1R: "Low",
      SLC24A5: "High",
      SLC45A2: "High",
      TYR: "Low",
      OCA2: "Low",
    },
  },
  height: {
    High: {
      FGFR3: "Low",
      GH1: "High",
      description: "큰 키 유전자의 발현",
    },
    Medium: {
      FGFR3: "Average",
      GH1: "Average",
      description: "평균 키 유전자의 발현",
    },
    Short: {
      FGFR3: "High",
      GH1: "Low",
      description: "작은 키 유전자의 발현",
    },
  },
  hair: {
    "White Hair": {
      MC1R: "Low",
      ASIP: "Low",
      description: "멜라닌이 거의 없어 흰색 머리가 나타남",
    },
    "Black Hair": {
      MC1R: "High",
      ASIP: "High",
      description: "멜라닌이 많이 생산되어 검정 머리로 나타남",
    },
    "Brown Hair": {
      MC1R: "Medium",
      ASIP: "Medium",
      description: "갈색 멜라닌이 적당히 생산됨",
    },
    "Blonde Hair": {
      MC1R: "Low",
      ASIP: "Medium",
      description: "멜라닌이 적어 노란 머리가 나타남",
    },
  },
};

document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab");
  const optionGrids = document.querySelectorAll(".options-grid");
  const attributeBoxes = document.querySelectorAll(".attribute-box");

  const characterEyes = document.getElementById("character-eyes");
  const characterBody = document.getElementById("character-body");
  const characterHair = document.getElementById("character-hair");

  if (!characterEyes || !characterBody || !characterHair) {
    console.error("캐릭터의 눈, 몸 또는 머리 요소를 찾을 수 없습니다.");
    return;
  }

  const imagePaths = {
    eyes: {
      흑안: "img/eyes1.png",
      녹안: "img/eyes2.png",
      "벽안(파랑)": "img/eyes3.png",
      회색눈: "img/eyes4.png",
      황안: "img/eyes5.png",
    },
    body: {
      Black: "img/black2.png",
      Apricot: "img/apricot2.png",
      White: "img/white2.png",
    },
    hair: {
      흰색: "img/hair4.png",
      검정: "img/hair3.png",
      갈색: "img/hair2.png",
      노란색: "img/hair1.png",
    },
    height: {
      High: "img/height_high.png",
      Medium: "img/height_medium.png",
      Short: "img/height_short.png",
    },
  };

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.getAttribute("data-target");

      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      optionGrids.forEach((grid) => {
        grid.classList.remove("active");
        if (grid.id === target) {
          grid.classList.add("active");
        }
      });
    });
  });

  const options = document.querySelectorAll(".option-item");
  options.forEach((option) => {
    option.addEventListener("click", () => {
      const category = document
        .querySelector(".tab.active")
        .getAttribute("data-target")
        .replace("-options", "");

      const selectedAttribute = option.querySelector("span").textContent.trim();
      const selectedImage = option.querySelector("img").src;

      let targetBox;
      switch (category) {
        case "eyes":
          targetBox = attributeBoxes[0];
          if (characterEyes) {
            characterEyes.src = imagePaths.eyes[selectedAttribute];
          }
          break;
        case "body":
          targetBox = attributeBoxes[3];
          if (characterBody) {
            characterBody.src = imagePaths.body[selectedAttribute];
          }
          break;
        case "hair":
          targetBox = attributeBoxes[2];
          if (characterHair) {
            characterHair.src = imagePaths.hair[selectedAttribute];
          }
          break;
        case "height":
          targetBox = attributeBoxes[1];
          if (targetBox) {
            const contentBox = targetBox.querySelector(".attribute-content");
            contentBox.innerHTML = `<span>${selectedAttribute}</span>`;
          }
          break;
        default:
          targetBox = null;
      }

      const attributeData = data[category][selectedAttribute];
      let dataHTML = "";
      for (const key in attributeData) {
        dataHTML += `<p><strong>${key}:</strong> ${attributeData[key]}</p>`;
      }

      if (targetBox) {
        const contentBox = targetBox.querySelector(".attribute-content");
        contentBox.innerHTML = `<img src="${selectedImage}" alt="icon" class="attribute-icon"><span>${selectedAttribute}</span>${dataHTML}`;
      }
    });
  });

  document.querySelector(".option-item").click();
});

document.addEventListener("DOMContentLoaded", () => {
  const characterBody = document.getElementById("character-body");

  const options = document.querySelectorAll(".option-item");
  options.forEach((option) => {
    option.addEventListener("click", () => {
      const category = document
        .querySelector(".tab.active")
        .getAttribute("data-target")
        .replace("-options", "");

      const selectedAttribute = option.querySelector("span").textContent.trim();

      if (category === "height") {
        selectedHeight = selectedAttribute;
      }

      if (category === "body") {
        selectedRace = selectedAttribute;
      }

      if (selectedHeight && selectedRace) {
        const bodyImage = imagePaths[selectedHeight][selectedRace];
        if (bodyImage) {
          characterBody.src = bodyImage;
        }
      }
    });
  });

  document.querySelector(".option-item").click();
});

document.addEventListener("DOMContentLoaded", () => {
  const characterEyes = document.getElementById("character-eyes");
  const characterBody = document.getElementById("character-body");
  const characterHair = document.getElementById("character-hair");

  characterEyes.src = imagePaths.eyes[defaultEyes];
  characterHair.src = imagePaths.hair[defaultHair];
  characterBody.src = imagePaths[defaultHeight][defaultRace];

  const options = document.querySelectorAll(".option-item");
  options.forEach((option) => {
    option.addEventListener("click", () => {
      const category = document
        .querySelector(".tab.active")
        .getAttribute("data-target")
        .replace("-options", "");

      const selectedAttribute = option.querySelector("span").textContent.trim();

      switch (category) {
        case "eyes":
          defaultEyes = selectedAttribute;
          characterEyes.src = imagePaths.eyes[defaultEyes];
          break;
        case "body":
          defaultRace = selectedAttribute;
          characterBody.src = imagePaths[defaultHeight][defaultRace];
          break;
        case "hair":
          defaultHair = selectedAttribute;
          characterHair.src = imagePaths.hair[defaultHair];
          break;
        case "height":
          defaultHeight = selectedAttribute;
          characterBody.src = imagePaths[defaultHeight][defaultRace];
          break;
      }
    });
  });

  document.querySelector(".option-item").click();
});

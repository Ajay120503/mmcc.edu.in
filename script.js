let menuIcon = document.createElement("i");
const createBarIcon = () => {
    let topLinks = document.querySelector(".top-links");
    menuIcon.setAttribute("id", "_top-link-icon");
    menuIcon.classList.add("fa-bars");
    menuIcon.classList.add("fa-solid");
    topLinks.prepend(menuIcon);

    clickTopLinkIcon();

}

const clickTopLinkIcon = () => {
    let clickIcon = document.querySelector("#_top-link-icon");
    let layout_ = document.querySelector("#layout_");
    let ulHidde = document.querySelector(".hidde-ul_");

    clickIcon.addEventListener("click", () => {
        ulHidde.classList.toggle("hidde-ul_");
        layout_.classList.add("_hidde-ul_");
        ulHidde.setAttribute("id", "layout");
    })
}

const _createBarIcon = () => {
    let menuIcon = document.querySelector(".home-icon");
    let navBar = document.querySelector(".nav-bar");
    menuIcon.classList.add("fa-bars");
    menuIcon.classList.remove("fa-house-chimney");
    menuIcon.classList.remove("home-icon");
    menuIcon.classList.add("home-icon_");
    navBar.prepend(menuIcon);
}

const removeLinks = () => {
    let topLinks = document.querySelector(".ul-links");
    topLinks.classList.add("hidde-ul_");
    topLinks.classList.remove("ul-links");
}

const _removeLinks = () => {
    let topUlLinks = document.querySelector(".ul-links_");
    topUlLinks.classList.add("_hidde-ul_");
    topUlLinks.classList.remove("ul-links_");

    let caretIcon = document.querySelector(".t-icon");
    caretIcon.addEventListener("click", () => {
        topUlLinks.classList.toggle("_hidde-ul_");
    })

}

const _manuBar = () => {
    let homeIcon = document.querySelector(".home-icon");
    let menuHidde = document.querySelector(".menu-bar");
    menuHidde.setAttribute("id", "menu-bar_");
    homeIcon.addEventListener("click", () => {
        menuHidde.classList.toggle("_hidde-menu_");
        console.log(menuHidde)
    })
}

const _removeLinks_ = () => {
    let menuBar = document.querySelector(".menu-bar");
    menuBar.classList.add("_hidde-menu_");
}

const changeMenuIcon = () => {

    let screenWidth = window.screen.width;

    if (screenWidth <= 1045) {
        removeLinks();
    }
    if (screenWidth <= 700) {
        createBarIcon();
        _removeLinks();
        _manuBar();
    }
    if (screenWidth <= 570) {
        _removeLinks_();
        _createBarIcon();
    }

}

changeMenuIcon();

//click on menu item for each hover
const hoverLinks = () => {
    let menuLinks = document.querySelectorAll(".menu-link");
    menuLinks.forEach((menuLink) => {
        menuLink.addEventListener("mouseover", () => {

        })
    })

}
// hoverLinks();

//img slider
const slider = () => {
    const slides = document.querySelectorAll(".slide");
    const forword = document.querySelector(".right_");
    const backword = document.querySelector(".left_");
    let counter = 0;
    slides.forEach((slide, index) => {
        slide.style.left = `${index * 100}%`;
    })

    const shiftImg = () => {
        slides.forEach((slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`;
        })
    }

    const goForword = () => {
        counter++;
        shiftImg();
    }

    const goBackword = () => {
        counter--;
        shiftImg();
    }

    forword.addEventListener("click", () => {
        goForword();
    });

    backword.addEventListener("click", () => {
        goBackword();
    });


}
// slider();


//scroll bottom
const bottomSlide = () => {
    let elements = document.querySelectorAll(".holder");
    elements.forEach((element) => {
        element.lastElementChild.scrollIntoView(false);
    })
}

//bottomSlide();

//text animation function
const textAnimation = () => {
    let words = document.querySelectorAll(".words");
    words.forEach((word) => {
        let letters = word.textContent.split("");
        word.textContent = "";
        letters.forEach((letter) => {
            let span = document.createElement("span");
            span.textContent = letter;
            span.classList = "letter";
            word.append(span);
        })
    })

    let currentWordindex = 0;
    let maxWordIndex = words.length - 1;
    words[currentWordindex].style.opacity = "1";

    let rotateText = () => {
        let currentWord = words[currentWordindex];
        let nextWord =
            currentWordindex === maxWordIndex ? words[0] : words[currentWordindex + 1];
        Array.from(currentWord.children).forEach((letter, i) => {
            setTimeout(() => {
                letter.className = "letter out";
            }, i * 80)
        })

        nextWord.style.opacity = "1";
        Array.from(nextWord.children).forEach((letter, i) => {
            letter.className = "letter behind";
            setTimeout(() => {
                letter.className = "letter in";
            }, 340 + i * 80);
        })

        currentWordindex =
            currentWordindex === maxWordIndex ? 0 : currentWordindex + 1;
    }

    rotateText();
    setInterval(rotateText, 15000);
}
textAnimation();

//notice toggle btn function

const toggleNotice = () => {
    let hidde = document.querySelector(".general-notice");
    let hidde_ = document.querySelector(".exam-notice");
    let hidde__ = document.querySelector(".event-box");
    let btn = document.querySelector("#btn1");
    let btn_ = document.querySelector("#btn2");
    let btn__ = document.querySelector("#btn3");

    const generalNote = () => {
        btn.addEventListener("click", () => {
            hidde.classList.remove("hidde-notice-item");
            hidde_.classList.add("hidde-notice-item");
            hidde__.classList.add("hidde-notice-item");
        });
    }

    generalNote();

    const examNote = () => {
        btn_.addEventListener("click", () => {
            hidde.classList.add("hidde-notice-item");
            hidde_.classList.remove("hidde-notice-item");
            hidde__.classList.add("hidde-notice-item");
        });
    }

    examNote();

    const eventNote = () => {
        btn__.addEventListener("click", () => {
            hidde.classList.add("hidde-notice-item");
            hidde_.classList.add("hidde-notice-item");
            hidde__.classList.remove("hidde-notice-item");
        });
    }

    eventNote();
}

toggleNotice();

//sport slider

function doSomethingRepeatedly() {
    let wrapper = document.querySelector(".swiper-wrapper");
    let firstSlide = wrapper.firstElementChild;

    wrapper.appendChild(firstSlide.cloneNode(true));

    wrapper.classList.add("swiper-wrapper-animation");

    setTimeout(function () {
        wrapper.classList.remove("swiper-wrapper-animation");
        wrapper.removeChild(firstSlide);

        setTimeout(doSomethingRepeatedly, 5000);
    }, 5000);
}

doSomethingRepeatedly();

//life of mmcc slider fun
document.addEventListener('DOMContentLoaded', function () {
    const sliderContainers = document.querySelectorAll('.__slider-container');

    sliderContainers.forEach((sliderContainer) => {
        const slides = sliderContainer.querySelectorAll('.__slide');
        const totalSlides = slides.length;
        let currentSlide = 0;

        function goToSlide(slide) {
            slides.forEach((s, index) => {
                s.style.transform = `translateX(-${slide * 100}%)`;
            });
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % totalSlides;
            goToSlide(currentSlide);
        }

        function prevSlide() {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            goToSlide(currentSlide);
        }

        sliderContainer.querySelector('.next-slide').addEventListener('click', nextSlide);
        sliderContainer.querySelector('.prev-slide').addEventListener('click', prevSlide);

        const intervalTime = 5000;
        let slideInterval = setInterval(nextSlide, intervalTime);

        sliderContainer.addEventListener('mouseenter', () => {
            clearInterval(slideInterval);
        });
        sliderContainer.addEventListener('mouseleave', () => {
            slideInterval = setInterval(nextSlide, intervalTime);
        });
    });
});


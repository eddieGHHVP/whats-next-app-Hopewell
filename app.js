// ===================== Content =====================
// youBody / hopewellBody are arrays of paragraph strings. A short paragraph
// ending in ":" or "?" is a reflective "fill-in" prompt and renders slightly
// emphasized to match the booklet's write-in lines.
const WEEKS = [
  {
    id: 1, num: "01", series: "Week One", pillar: "Series Launch",
    title: "What's Next", subtitle: "Strategic Plan Intro",
    scripture: "Zechariah 4:1-10",
    pillarDescription: null,
    moment: "The people in Zechariah\u2019s day had come home and started rebuilding, but the work had stalled. They were discouraged, and the future wasn\u2019t looking much like they had hoped. Into that moment, God spoke through Zechariah: \u201cNot by might, nor by power, but by my Spirit.\u201d They weren\u2019t going to get there by trying harder or having everything figured out. God was reminding them that the Spirit was already at work, even when they couldn\u2019t see how everything would come together.",
    youHeadline: "What feels unfinished in your life right now?",
    youBody: [
      "Maybe there\u2019s something you\u2019ve been trying to figure out, waiting on, worrying about, or trying very hard to control.",
      "Right now, I\u2019m wondering what\u2019s next with...",
      "Take a minute to pray about it this week. You don\u2019t need to solve it. Put it in God\u2019s hands and ask, \u201cWhat is mine to do next?\u201d",
    ],
    youCheckLabel: "I prayed about this.",
    hopewellHeadline: "What do you hope is true of Hopewell five years from now?",
    hopewellBody: [
      "Over these six weeks, we\u2019ll be looking at the five areas that will guide Hopewell\u2019s next five years: Faith & Connection, Presence & Visibility, Leadership, Generosity & Sustainability, and Mission & Partnership.",
      "But before we get into any of that, picture the people. What do you hope has grown? Who do you hope is finding a place here? What do you hope our community knows about us? What kind of church do you hope we are becoming?",
      "Five years from now, I hope Hopewell is a church that...",
      "Choose one word or phrase from what you wrote and put it on a prayer card in the Chapel or Gathering Place. Our staff and Church Council will be reading these as we listen for what you hope for Hopewell and continue putting the plan into practice.",
      "And sometime this week, pray for them too: for wisdom, courage, and openness to the Spirit as they help lead us into these next five years.",
    ],
    hopewellCheckLabel: "I prayed daily for our staff and Council",
    why: "A five-year plan gives us a direction. It helps us name what matters and decide where to put our energy. But a plan can\u2019t tell us everything the next five years will hold. So we begin by listening, praying, and remembering that whatever comes next, we want to be a church that follows the Spirit.",
    reflection: "Where are you being invited to trust the Spirit with what comes next?",
  },
  {
    id: 2, num: "02", series: "Week Two", pillar: "Pillar 1 \u2014 Faith & Connection",
    title: "Keep Growing", subtitle: "Faith & Connection",
    scripture: "Acts 2:37-47",
    pillarDescription: "Growing deeper in faith and building relationships where we know and are known.",
    moment: "The first followers of Jesus didn\u2019t just worship together. They learned together, prayed together, ate together, shared what they had, and became part of one another\u2019s lives. God was growing a community where faith and relationships were connected. People had places to belong, people who knew them, and people to grow alongside.",
    youHeadline: "Who helps your faith grow?",
    youBody: [
      "Think about the people you can talk to about more than schedules, work, kids, or what\u2019s for dinner. Who can you ask a real question? Who knows what\u2019s going on with you? Who helps you think about God, even if neither of you has all the answers?",
      "One person who helps me grow is...",
      "One relationship I\u2019d like to go a little deeper in is...",
      "Do something small with that this week. Send the text. Make the coffee date. Ask the question. Tell someone what\u2019s really going on.",
    ],
    youCheckLabel: "I took this step",
    hopewellHeadline: "Where could you know people and be known?",
    hopewellBody: [
      "One of the priorities in Hopewell\u2019s five-year plan is Faith & Connection: helping more people grow in their faith while building relationships where they can really know and care for one another.",
      "Sunday worship is part of that, but it\u2019s hard to really know one another when we\u2019re sitting in rows. That\u2019s why one of our goals is to have 60% of our congregation connected to a small group over the next five years.",
      "That doesn\u2019t mean everybody has to find the same kind of group. Bible studies, classes, ministry groups, short-term groups, and other smaller gatherings can all give us places to grow and connect.",
      "Take a look at what\u2019s available at Hopewell right now. Is there one place you\u2019d be willing to try? You don\u2019t have to make a long-term commitment. Ask about it. Show up once. See what happens.",
      "One place I might check out...",
    ],
    hopewellCheckLabel: "I took this step",
    why: "We want Hopewell to be a church where people don\u2019t disappear into the crowd. Where someone knows your name and your story. Where people notice when you\u2019re missing, show up when life gets hard, and help you keep growing in faith. That\u2019s what the 60% goal is really about. The number gives us something to work toward. The people and relationships are why it matters.",
    reflection: "Where might you need a smaller circle of people to help you keep growing?",
  },
  {
    id: 3, num: "03", series: "Week Three", pillar: "Pillar 2 \u2014 Presence & Visibility",
    title: "Tell the Story", subtitle: "Presence & Visibility",
    scripture: "Mark 5:1-20",
    pillarDescription: "Showing up in our community so more people know who we are and that there\u2019s a place for them here.",
    moment: "At the beginning of John\u2019s Gospel, one person meets Jesus and tells another. Andrew finds Simon. Philip finds Nathanael. And when Nathanael isn\u2019t convinced, Philip doesn\u2019t argue with him or try to come up with the perfect thing to say. He simply says, \u201cCome and see.\u201d God uses ordinary people and ordinary conversations to open the door for someone else.",
    youHeadline: "Why does Hopewell matter to you?",
    youBody: [
      "Forget trying to come up with the perfect church answer. Think about your own experience here. Maybe you found people who showed up when you needed them. Maybe your kids found a place to belong. Maybe something in worship helped you see God differently. Maybe you\u2019ve been challenged, loved, welcomed, or given a chance to serve.",
      "I\u2019m grateful I found Hopewell because...",
      "Now think about someone in your life who doesn\u2019t know that story. You don\u2019t need a speech or a sales pitch. Just be ready to tell the truth about why this place has mattered to you when the opportunity comes.",
    ],
    youCheckLabel: "I told my story",
    hopewellHeadline: "Help more people see who we are.",
    hopewellBody: [
      "Presence & Visibility is one of the priorities in Hopewell\u2019s five-year plan. We want to do a better job of telling Hopewell\u2019s story, strengthening our website and digital presence, sharing what\u2019s happening here, and being more visible in the community. We\u2019re working toward 10% growth in participation each year, but the goal is bigger than getting more people through the doors.",
      "We want it to be easier for someone who is looking for community, hope, a place for their kids, a way to serve, or a place to explore faith to discover that there may be something here for them.",
      "You can help with that. Share a Hopewell post that means something to you. Wear a Hopewell shirt around town. Put a sign in your yard or a magnet on your car. Tell a friend about something happening here that you think they\u2019d actually enjoy. Or simply tell someone why you keep coming back.",
      "One way I can help someone \u201ccome and see\u201d...",
    ],
    hopewellCheckLabel: "I took this step",
    why: "A lot of people know where Hopewell is. They drive past the building, see the sign, or know somebody who comes here. But knowing where a church is isn\u2019t the same as knowing its story. The more clearly we share who we are and what God is doing among us, the more opportunities people have to discover Hopewell for themselves. The website, social media, signs, shirts, and invitations can all open a door. What happens after that is bigger than any communication plan.",
    reflection: "Who is one person you could invite to \u201ccome and see\u201d?",
  },
  {
    id: 4, num: "04", series: "Week Four", pillar: "Pillar 3 \u2014 Leadership",
    title: "I See Something in You", subtitle: "Leadership",
    scripture: "Acts 9:26-28; 11:19-26",
    pillarDescription: "Helping people discover their gifts and use them to make a difference.",
    moment: "When Saul first came to Jerusalem, people weren\u2019t exactly lining up to give him a chance. They knew his past, and they didn\u2019t trust him. But Barnabas saw something in Saul that others couldn\u2019t see yet. He stood beside him, spoke up for him, and later went looking for him when there was important work to do in Antioch. Sometimes another person sees what God might be growing in us before we can see it ourselves.",
    youHeadline: "What might someone else see in you?",
    youBody: [
      "Think about a time someone noticed something in you before you were quite ready to see it yourself. Maybe they trusted you with responsibility, asked for your help, encouraged you to try something new, or simply said, \u201cYou\u2019d be good at this.\u201d",
      "Something other people have seen in me...",
      "Now think about where that gift might take you next. Is there something you\u2019ve been curious about? A place you could stretch a little? Something you keep thinking about but haven\u2019t quite said yes to?",
      "Something I might be ready to try...",
      "You don\u2019t need to know where it will lead. Just pay attention to what keeps nudging you.",
    ],
    youCheckLabel: "I'm paying attention to this",
    hopewellHeadline: "Who do you see something in?",
    hopewellBody: [
      "Leadership is one of the priorities in Hopewell\u2019s five-year plan. We want to become more intentional about helping people discover their gifts, giving them opportunities to use those gifts, and developing 10\u201315 new leaders each year.",
      "That starts long before someone gets a title or takes a position. It starts when we notice.",
      "Think of one person at Hopewell whose gifts you\u2019ve seen. Maybe they\u2019re good at welcoming people, listening, teaching, organizing, encouraging, working with kids, fixing things, asking good questions, or bringing people together.",
      "Someone I see something in...",
      "Tell them this week. A text, card, email, or conversation is enough. Be specific: \u201cI\u2019ve noticed that you\u2026\u201d or \u201cYou\u2019re really good at\u2026\u201d",
    ],
    hopewellCheckLabel: "I sent them a message",
    why: "Hopewell will need new leaders for what comes next, and we don\u2019t want to wait until there\u2019s an empty position to start looking for them. We want to be a church that notices people, helps them recognize their gifts, gives them room to grow, and walks with them as they learn. Developing 10\u201315 new leaders each year gives us something concrete to work toward. But every one of those leaders starts as a person whose gifts are worth noticing.",
    reflection: "Where at Hopewell might you be ready to step forward, use your gifts, or lead in a new way?",
  },
  {
    id: 5, num: "05", series: "Week Five", pillar: "Pillar 4 \u2014 Generosity & Sustainability",
    title: "What's in Your Hands", subtitle: "Generosity & Stewardship",
    scripture: "2 Corinthians 8:1-12",
    pillarDescription: "Growing in generosity and building resources for ministry now and into the future.",
    moment: "Paul tells the Corinthians about churches in Macedonia that didn\u2019t have much to spare, yet generosity kept spilling out of them. Then he turns the question toward the Corinthians: What do you have? Generosity doesn\u2019t have to wait until we have more money, more time, or fewer demands on us. It begins with what is already in our hands and what we choose to do with it.",
    youHeadline: "Take an honest inventory.",
    youBody: [
      "Look at what\u2019s in your hands right now: your money, your time, your home, your abilities, your relationships, your experience, your influence.",
      "Which of those do you tend to hold pretty tightly? Which are easier to share? Where might generosity be asking a little more of you?",
      "Something I have that I could be more generous with...",
      "Now make it concrete...",
      "One thing I could actually do with it...",
      "Don\u2019t wait until you have more. Start with what\u2019s already there.",
    ],
    youCheckLabel: "I'm ready to act on this",
    hopewellHeadline: "What do we want to make possible together?",
    hopewellBody: [
      "Generosity & Sustainability is one of the priorities in Hopewell\u2019s five-year plan because the ministry we imagine for the future will need resources to become real.",
      "Over the next five years, we want to grow giving by 10% each year, make giving simpler and more accessible, and help people think about generosity across a lifetime, including legacy gifts through wills and estate plans.",
      "But those numbers are really about having the freedom to say yes. Yes when a ministry is growing and needs more room. Yes when someone has an idea worth trying. Yes when there\u2019s a need in our community we can meet. Yes when a mission partner asks us to come alongside them. Yes when God opens a door we didn\u2019t see coming.",
      "That\u2019s the kind of church we want to keep becoming: one that cares well for what we\u2019ve been given and is ready for what comes next.",
      "What could you help make possible?",
      "If you\u2019re ready to begin giving, increase your giving, or make a new commitment to Hopewell, visit <a href=\"https://onrealm.org/HopewellChurch/give/give\" target=\"_blank\" rel=\"noopener\" class=\"callout-link\">Hopewellumc.org</a> to make a donation now, or set up a recurring gift to support our next five years of growth.",
    ],
    hopewellCheckLabel: "I'm ready to take a next step in giving",
    why: "Generosity has shaped Hopewell for a long time. Much of what we value about this church exists because people before us gave something they could have kept for themselves. They gave money, time, property, skill, leadership, and years of their lives. Some of what they made possible, they never got to see. Now some of the future is in our hands. What we choose to share today will help shape what Hopewell is able to do tomorrow.",
    reflection: "What is one next step in generosity you\u2019re ready to take?",
  },
  {
    id: 6, num: "06", series: "Week Six", pillar: "Pillar 5 \u2014 Mission & Partnership",
    title: "Beyond the Walls", subtitle: "Mission & Partnership",
    scripture: "Acts 1:6-8",
    pillarDescription: "Taking the love of Christ beyond our walls and working with others to make a difference.",
    moment: "The disciples want to know what Jesus is going to do next. Jesus turns their attention toward what they will do next: \u201cYou will be my witnesses.\u201d Jerusalem. Judea. Samaria. The ends of the earth. Their world is about to get much bigger. And they won\u2019t go alone. Jesus promises that the Holy Spirit will give them power for what comes next. The same Spirit who has been at work in them will send them beyond the places and people they already know.",
    youHeadline: "Where could you show up?",
    youBody: [
      "Hopewell already has relationships with organizations doing meaningful work in our community and around the world. You don\u2019t have to invent your own mission. You can find a place to step in.",
      "Think about what you have to offer and what you care about. Maybe you have a few hours. Maybe you\u2019re good with your hands. Maybe you love working with kids. Maybe there\u2019s an issue you want to understand better. Maybe you\u2019ve been meaning to get involved and just haven\u2019t taken the first step.",
      "One place I\u2019d like to learn more about or serve...",
      "This week, take one step. Look at the opportunities. Ask a question. Sign up. Go with somebody you know. See where there might be a place for you.",
    ],
    youCheckLabel: "I signed up",
    hopewellHeadline: "What happens when more of us go?",
    hopewellBody: [
      "Mission & Partnership is one of the priorities in Hopewell\u2019s five-year plan, and it builds on something that has been part of Hopewell\u2019s life for a long time. Through Beyond the Walls and our mission partners, we\u2019ve learned that we can do far more together than any of us can do alone.",
      "Over the next five years, we want to deepen that culture of mission across Hopewell, creating more opportunities for people of every age to serve, learn, build relationships, and put their faith into action beyond our walls.",
      "Our hope is that mission becomes a natural part of life at Hopewell, with more of us finding a place to participate in the relationships and opportunities we already share.",
      "Ready to find your place? Visit the Missions table or hopewellumc.org to see current opportunities to serve with Hopewell and our mission partners.",
      "Find a place to serve beyond the walls.",
    ],
    hopewellCheckLabel: "I took this step",
    why: "For eighteen years, Hopewell has been learning what can happen when people bring what they have and put it together. Someone gives money. Someone gives a Saturday. Someone teaches. Someone cooks. Someone builds. Someone travels. Someone knows the community. Someone sees a need and shows up. Together, we can do things none of us could do alone. And that\u2019s where these six weeks have been taking us. We grow in faith so that faith can take us somewhere. We build relationships so we have people beside us. We tell the story so someone else can find their way in. We recognize gifts and grow leaders. We practice generosity so there are resources to do the work. And then we go. Beyond ourselves. Beyond what\u2019s comfortable. Beyond the walls.",
    reflection: "Where might God be sending you next?",
  },
];

const WELCOME_PARAS = [
  "Over the next six weeks, Pastor Amy will be walking us through \u201cWhat\u2019s Next\u201d \u2014 a sermon series built around Hopewell\u2019s five-year strategic roadmap. Each week centers on one of the five pillars that will shape our church\u2019s direction: Faith & Connection, Presence & Visibility, Leadership, Generosity & Stewardship, and Mission & Partnership.",
  "This app is your companion for the journey. Each week includes the scripture, a short reflection, space for sermon notes, and two \u201cNow What\u201d sections; one for you personally, and one for what Hopewell as a whole is committing to. These aren\u2019t abstract ideas. They\u2019re small, real, concrete steps that let you become part of what God is doing here, not just hear about it.",
  "Take notes during the message. Write in the reflection spaces. Check things off as you go \u2014 your progress is saved right on this device. And if you\u2019re part of a small group, ask your leader about the companion discussion guide.",
  "We\u2019re grateful you\u2019re walking through this season with us.",
];

// ===================== Storage =====================
const STORAGE_KEY = "hopewell-whatsnext-v1";

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  const initial = {};
  WEEKS.forEach((w) => {
    initial["week" + w.id] = { youDone: false, hopewellAck: false, notes: "", reflection: "" };
  });
  return initial;
}

let STATE = loadState();

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(STATE));
  } catch (e) {}
}

function weekState(id) {
  const key = "week" + id;
  if (!STATE[key]) STATE[key] = { youDone: false, hopewellAck: false, notes: "", reflection: "" };
  return STATE[key];
}

function weekStatus(id) {
  const s = weekState(id);
  const hasNotes = (s.notes || "").trim().length > 0 || (s.reflection || "").trim().length > 0;
  if (s.youDone && s.hopewellAck) return "complete";
  if (s.youDone || s.hopewellAck || hasNotes) return "started";
  return "none";
}

function overallProgress() {
  let total = WEEKS.length * 2;
  let done = 0;
  WEEKS.forEach((w) => {
    const s = weekState(w.id);
    if (s.youDone) done++;
    if (s.hopewellAck) done++;
  });
  return { done, total, pct: Math.round((done / total) * 100) };
}

// ===================== Router =====================
function currentRoute() {
  const hash = window.location.hash.replace(/^#\/?/, "");
  if (!hash) return { screen: "home" };
  const parts = hash.split("/");
  if (parts[0] === "week" && parts[1]) return { screen: "week", id: parseInt(parts[1], 10) };
  return { screen: parts[0] };
}

function navigate(path) {
  window.location.hash = path;
}

window.addEventListener("hashchange", render);
window.addEventListener("DOMContentLoaded", () => {
  render();
  registerSW();
});

// ===================== Rendering =====================
function el(html) {
  const t = document.createElement("template");
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}

let LAST_ROUTE_KEY = null;

function render() {
  const route = currentRoute();
  const routeKey = route.screen + (route.id || "");
  const preserveScroll = routeKey === LAST_ROUTE_KEY;
  const scrollY = window.scrollY;

  const app = document.getElementById("app");
  app.innerHTML = "";

  document.querySelectorAll(".nav-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.nav === route.screen);
  });

  if (route.screen === "week" && route.id) {
    app.appendChild(renderWeekScreen(route.id));
  } else if (route.screen === "vision") {
    app.appendChild(renderVisionScreen());
  } else if (route.screen === "progress") {
    app.appendChild(renderProgressScreen());
  } else if (route.screen === "closing") {
    app.appendChild(renderClosingScreen());
  } else {
    app.appendChild(renderHomeScreen());
  }

  LAST_ROUTE_KEY = routeKey;
  window.scrollTo(0, preserveScroll ? scrollY : 0);
}

// ===================== Install detection =====================
const INSTALL_DISMISS_KEY = "hopewell-whatsnext-install-dismissed";
let deferredInstallPrompt = null;

function isStandalone() {
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    window.navigator.standalone === true
  );
}

function detectPlatform() {
  const ua = window.navigator.userAgent || "";
  const isIOS = /iPad|iPhone|iPod/.test(ua) && !window.MSStream;
  const isAndroid = /Android/.test(ua);
  if (isIOS) {
    // Only Safari can install a true standalone PWA on iOS. Other iOS browsers
    // (Chrome, Firefox, Edge) are WebKit wrappers whose "Add to Home Screen"
    // just bookmarks the page inside that browser, not a real standalone app.
    const isNonSafariIOSBrowser = /CriOS|FxiOS|EdgiOS|OPiOS|mercury/i.test(ua);
    return isNonSafariIOSBrowser ? "ios-other-browser" : "ios-safari";
  }
  return isAndroid ? "android" : "other";
}

function installDismissed() {
  try {
    return localStorage.getItem(INSTALL_DISMISS_KEY) === "1";
  } catch (e) {
    return false;
  }
}

function dismissInstallBanner() {
  try {
    localStorage.setItem(INSTALL_DISMISS_KEY, "1");
  } catch (e) {}
}

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredInstallPrompt = e;
  // if the home screen is currently showing, re-render so the real Install button appears
  if (currentRoute().screen === "home" || !window.location.hash) render();
});

window.addEventListener("appinstalled", () => {
  deferredInstallPrompt = null;
  dismissInstallBanner();
});

function renderInstallBanner() {
  if (isStandalone() || installDismissed()) return null;
  const platform = detectPlatform();

  let actionHtml = "";
  if (deferredInstallPrompt) {
    actionHtml = `<button class="install-btn" id="install-now-btn">Add to Home Screen</button>`;
  } else if (platform === "ios-safari") {
    actionHtml = `<div class="install-steps">Tap the <b>web address</b> at the top of Safari, then tap <b>Share</b> &#8593; and choose <b>Add to Home Screen</b>.</div>`;
  } else if (platform === "ios-other-browser") {
    actionHtml = `<div class="install-steps">Open this page in <b>Safari</b> first \u2014 that\u2019s the only iPhone browser that can add it to your Home Screen as a real app.</div>`;
  } else if (platform === "android") {
    actionHtml = `<div class="install-steps">Tap the <b>&#8942;</b> menu in Chrome, then <b>Add to Home screen</b> or <b>Install app</b>.</div>`;
  } else {
    actionHtml = `<div class="install-steps">Open this page on your phone to add it to your Home Screen.</div>`;
  }

  const banner = el(`
    <div class="install-banner">
      <button class="install-dismiss" aria-label="Dismiss">&times;</button>
      <div class="install-banner-title">Keep this a tap away</div>
      <div class="install-banner-sub">Add What's Next to your Home Screen so it's easy to come back to each week.</div>
      ${actionHtml}
    </div>
  `);

  banner.querySelector(".install-dismiss").addEventListener("click", (e) => {
    e.stopPropagation();
    dismissInstallBanner();
    banner.remove();
  });

  const installBtn = banner.querySelector("#install-now-btn");
  if (installBtn) {
    installBtn.addEventListener("click", async () => {
      if (!deferredInstallPrompt) return;
      deferredInstallPrompt.prompt();
      await deferredInstallPrompt.userChoice;
      deferredInstallPrompt = null;
      dismissInstallBanner();
      banner.remove();
    });
  }

  return banner;
}

function renderInstallInstructionsCard() {
  const platform = detectPlatform();
  const iosNote =
    platform === "ios-other-browser"
      ? `<p class="install-warning">You&rsquo;re currently in a non-Safari browser \u2014 open this page in <b>Safari</b> to add it as a real app. Other iPhone browsers can only bookmark it.</p>`
      : "";
  const card = el(`
    <div class="welcome-card install-instructions-card">
      <h3>Get This On Your Phone</h3>
      <p>This app works best saved right on your Home Screen \u2014 it opens full-screen, works without signal, and keeps your notes and checkmarks right where you left them.</p>
      ${iosNote}
      <div class="install-tabs">
        <div class="install-tab ${platform === "ios-safari" || platform === "other" ? "active-hint" : ""}">
          <div class="install-tab-label">On iPhone \u2014 must be Safari</div>
            <ol>
            <li>Open this page in <b>Safari</b> (not Chrome or another browser)</li>
            <li>Tap the <b>web address</b> at the top of the screen</li>
            <li>Tap the <b>Share</b> icon &#8593; that appears</li>
            <li>Scroll down and tap <b>Add to Home Screen</b></li>
            <li>Tap <b>Add</b> in the top corner</li>
          </ol>
        </div>
        <div class="install-tab ${platform === "android" ? "active-hint" : ""}">
          <div class="install-tab-label">On Android (Chrome)</div>
          <ol>
            <li>Tap the <b>&#8942;</b> menu in the top right</li>
            <li>Tap <b>Add to Home screen</b> or <b>Install app</b></li>
            <li>Confirm by tapping <b>Add</b> or <b>Install</b></li>
          </ol>
        </div>
      </div>
    </div>
  `);
  return card;
}

function renderHomeScreen() {
  const wrap = el(`<div class="screen"></div>`);
  const prog = overallProgress();

  const banner = renderInstallBanner();
  if (banner) wrap.appendChild(banner);

  wrap.appendChild(el(`
    <div class="home-hero">
      <img src="icons/logo-mark.png" alt="">
      <div class="home-kicker">A Six-Week Journey</div>
      <div class="home-title">What's Next</div>
      <div class="home-subtitle">Now What?</div>
      <div class="home-tagline">A weekly companion for the Hopewell Church congregation</div>
    </div>
  `));

  const progBlock = el(`
    <div class="overall-progress">
      <div class="overall-progress-label">Your Progress</div>
      <div class="overall-bar"><div class="overall-bar-fill" style="width:${prog.pct}%"></div></div>
      <div class="overall-progress-text">${prog.done} of ${prog.total} steps taken across the series</div>
    </div>
  `);
  wrap.appendChild(progBlock);

  wrap.appendChild(el(`<div class="section-label">This Series</div>`));

  WEEKS.forEach((w) => {
    const status = weekStatus(w.id);
    const badgeClass = status === "complete" ? "complete" : status === "started" ? "started" : "";
    const card = el(`
      <a href="#/week/${w.id}" class="week-card">
        <div class="week-num-badge ${badgeClass}">${status === "complete" ? "&#10003;" : w.num}</div>
        <div class="week-card-body">
          <div class="week-card-pillar">${w.series} \u00b7 ${w.subtitle}</div>
          <div class="week-card-title">${w.title}</div>
          <div class="week-card-sub">${w.scripture}</div>
        </div>
        <div class="week-card-chevron">&#8250;</div>
      </a>
    `);
    wrap.appendChild(card);
  });

  wrap.appendChild(el(`
    <a href="#/closing" class="section-label" style="display:block; margin-top:26px;">Read the closing word &#8250;</a>
  `));

  wrap.appendChild(el(`<div class="footer-note">HOPEWELL CHURCH &middot; LOVE GOD &middot; LOVE OTHERS</div>`));

  return wrap;
}

function renderVisionScreen() {
  const wrap = el(`<div class="screen"></div>`);
  const block = el(`<div class="vision-block"></div>`);
  block.appendChild(el(`<img src="icons/logo-mark.png" class="vision-icon" alt="">`));
  wrap.appendChild(block);

  const paras = WELCOME_PARAS.map((p) => `<p>${p}</p>`).join("");
  const welcome = el(`
    <div class="welcome-card">
      <div class="home-kicker welcome-kicker">Welcome</div>
      <h3>A Season of Growth</h3>
      ${paras}
      <div class="welcome-signoff">&mdash; Hopewell Church Leadership</div>
    </div>
  `);
  wrap.appendChild(welcome);

  wrap.appendChild(renderInstallInstructionsCard());

  return wrap;
}

function isPromptLine(text) {
  // short reflective "fill in" lines end with :, ... or ? and are fairly brief
  const trimmed = text.trim();
  return (
    trimmed.length < 70 &&
    (trimmed.endsWith(":") || trimmed.endsWith("?") || trimmed.endsWith("..."))
  );
}

function renderCalloutBody(bodyArr) {
  return bodyArr
    .map((p) => {
      const cls = isPromptLine(p) ? "callout-para callout-prompt" : "callout-para";
      return `<div class="${cls}">${p}</div>`;
    })
    .join("");
}

function renderWeekScreen(id) {
  const w = WEEKS.find((x) => x.id === id);
  if (!w) {
    const wrap = el(`<div class="screen"></div>`);
    wrap.appendChild(el(`<p>Week not found. <a href="#/home">Go home</a></p>`));
    return wrap;
  }
  const s = weekState(id);
  const wrap = el(`<div class="screen"></div>`);

  wrap.appendChild(el(`<a href="#/home" class="back-btn">&#8249; All Weeks</a>`));
  wrap.appendChild(el(`<div class="week-eyebrow">${w.series} &middot; ${w.pillar}</div>`));
  wrap.appendChild(el(`<div class="week-title">${w.title}</div>`));
  wrap.appendChild(el(`<div class="week-subtitle">${w.subtitle}</div>`));
  wrap.appendChild(el(`<div class="week-scripture">SCRIPTURE &middot; <b>${w.scripture}</b></div>`));

  const tracker = el(`<div class="tracker-row"></div>`);
  WEEKS.forEach((tw) => {
    const st = weekStatus(tw.id);
    let cls = "tracker-dot";
    if (tw.id === id) cls += " active";
    else if (st !== "none") cls += " done";
    tracker.appendChild(el(`<div class="${cls}"></div>`));
  });
  wrap.appendChild(tracker);

  wrap.appendChild(el(`<hr class="rule">`));
  wrap.appendChild(el(`<div class="field-label">The Moment</div>`));
  wrap.appendChild(el(`<div class="moment-text">${w.moment}</div>`));

  if (w.pillarDescription) {
    wrap.appendChild(el(`<div class="field-label">The Pillar</div>`));
    wrap.appendChild(el(`<div class="pillar-text">${w.pillarDescription}</div>`));
  }

  // For You callout
  const youBox = el(`
    <div class="callout you">
      <div class="callout-label">Now What &mdash; For You</div>
      <div class="callout-headline">${w.youHeadline}</div>
      <div class="callout-body">${renderCalloutBody(w.youBody)}</div>
      <label class="callout-check">
        <input type="checkbox" ${s.youDone ? "checked" : ""} data-field="youDone" data-week="${id}">
        <span>${w.youCheckLabel}</span>
      </label>
    </div>
  `);
  wrap.appendChild(youBox);

  // For Hopewell callout
  const hopewellBox = el(`
    <div class="callout hopewell">
      <div class="callout-label">Now What &mdash; For Hopewell</div>
      <div class="callout-headline">${w.hopewellHeadline}</div>
      <div class="callout-body">${renderCalloutBody(w.hopewellBody)}</div>
      <label class="callout-check">
        <input type="checkbox" ${s.hopewellAck ? "checked" : ""} data-field="hopewellAck" data-week="${id}">
        <span>${w.hopewellCheckLabel}</span>
      </label>
    </div>
  `);
  wrap.appendChild(hopewellBox);

  if (w.why) {
    wrap.appendChild(el(`<div class="field-label" style="margin-top:22px;">Why It Matters</div>`));
    wrap.appendChild(el(`<div class="moment-text why-text">${w.why}</div>`));
  }

  wrap.appendChild(el(`<hr class="rule">`));
  wrap.appendChild(el(`<div class="field-label">Sermon Notes</div>`));
  const notesArea = el(`<textarea class="notes-area" placeholder="Jot your notes here during the message..." data-field="notes" data-week="${id}"></textarea>`);
  notesArea.value = s.notes || "";
  wrap.appendChild(notesArea);

  wrap.appendChild(el(`<div class="reflection-prompt">${w.reflection}</div>`));
  const reflectionArea = el(`<textarea class="reflection-area" placeholder="Your thoughts..." data-field="reflection" data-week="${id}"></textarea>`);
  reflectionArea.value = s.reflection || "";
  wrap.appendChild(reflectionArea);

  wrap.appendChild(el(`<div class="save-note">Saved automatically on this device.</div>`));

  const navRow = el(`<div class="week-nav-row"></div>`);
  if (id > 1) {
    navRow.appendChild(el(`<a href="#/week/${id - 1}" class="week-nav-btn secondary">&#8249; Week ${id - 1}</a>`));
  }
  if (id < WEEKS.length) {
    navRow.appendChild(el(`<a href="#/week/${id + 1}" class="week-nav-btn">Week ${id + 1} &#8250;</a>`));
  } else {
    navRow.appendChild(el(`<a href="#/closing" class="week-nav-btn">Finish the Series &#8250;</a>`));
  }
  wrap.appendChild(navRow);

  // Wire up events
  wrap.querySelectorAll('input[type="checkbox"]').forEach((cb) => {
    cb.addEventListener("change", (e) => {
      const st = weekState(id);
      st[e.target.dataset.field] = e.target.checked;
      saveState();
      // refresh tracker/badges without full re-render jump
      render();
    });
  });
  let saveTimer = null;
  wrap.querySelectorAll("textarea").forEach((ta) => {
    ta.addEventListener("input", (e) => {
      clearTimeout(saveTimer);
      const field = e.target.dataset.field;
      const val = e.target.value;
      saveTimer = setTimeout(() => {
        const st = weekState(id);
        st[field] = val;
        saveState();
      }, 300);
    });
  });

  return wrap;
}

function renderProgressScreen() {
  const wrap = el(`<div class="screen"></div>`);
  const prog = overallProgress();

  wrap.appendChild(el(`<div class="section-label" style="margin-top:4px;">Your Progress</div>`));
  wrap.appendChild(el(`
    <div class="overall-progress" style="margin-top:0;">
      <div class="overall-bar"><div class="overall-bar-fill" style="width:${prog.pct}%"></div></div>
      <div class="overall-progress-text">${prog.done} of ${prog.total} steps taken across the series</div>
    </div>
  `));

  WEEKS.forEach((w) => {
    const s = weekState(w.id);
    const status = weekStatus(w.id);
    const pillClass = status === "complete" ? "progress-pill complete" : "progress-pill";
    const pillText = status === "complete" ? "Complete" : status === "started" ? "In progress" : "Not started";
    const card = el(`
      <div class="progress-week">
        <div class="progress-week-head">
          <div class="progress-week-title">${w.num} &middot; ${w.title}</div>
          <div class="${pillClass}">${pillText}</div>
        </div>
        <div class="progress-items">
          <div class="${s.youDone ? "yes" : "no"}">${s.youDone ? "\u2713" : "\u2022"} For You: ${w.youCheckLabel}</div>
          <div class="${s.hopewellAck ? "yes" : "no"}">${s.hopewellAck ? "\u2713" : "\u2022"} For Hopewell: ${w.hopewellCheckLabel}</div>
        </div>
      </div>
    `);
    card.addEventListener("click", () => navigate("/week/" + w.id));
    wrap.appendChild(card);
  });

  const resetBtn = el(`<a href="#" class="reset-btn">Reset all progress</a>`);
  resetBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (confirm("Reset all progress and notes? This can't be undone.")) {
      localStorage.removeItem(STORAGE_KEY);
      STATE = loadState();
      render();
    }
  });
  wrap.appendChild(resetBtn);

  return wrap;
}

function renderClosingScreen() {
  const wrap = el(`<div class="screen"></div>`);
  wrap.appendChild(el(`
    <div class="closing-block">
      <img src="icons/logo-mark.png" alt="">
      <div class="home-kicker">What's Next For Us</div>
      <h2>Keep Going</h2>
      <p>Six weeks ago, we began with a promise:</p>
      <p>&ldquo;Not by might, nor by power, but by my Spirit.&rdquo;</p>
      <p>Now Jesus sends his disciples out with another:</p>
      <p>&ldquo;You will receive power when the Holy Spirit has come upon you; and you will be my witnesses.&rdquo;</p>
      <p>We started with the Spirit. We end with the Spirit.</p>
      <p>Over these six weeks, we&rsquo;ve asked what&rsquo;s next for our faith, our relationships, our story, our leadership, our generosity, and our life beyond these walls. The five-year plan gives us a direction. The Spirit will lead us into a future we can&rsquo;t see yet.</p>
      <p>So keep growing. Tell the story. See something in someone. Give what you have. Go beyond the walls.</p>
      <p><b>What&rsquo;s your next step? Let&rsquo;s take it together.</b></p>
    </div>
  `));
  wrap.appendChild(el(`<div class="footer-note">HOPEWELL CHURCH &middot; DOWNINGTOWN, PA &middot; HopewellUMC.org</div>`));
  return wrap;
}

// ===================== Service worker =====================
function registerSW() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js").catch(() => {});
  }
}

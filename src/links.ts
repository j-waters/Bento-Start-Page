// <a
//   href="https://github.com/"
// target="blank"
// class="qlink__link qlink__link-1"
// >
// <i class="qlink__icon" data-feather="github"></i>
//   </a>
//   <a
// target="blank"
// href="https://outlook.live.com/mail/inbox"
// class="qlink__link qlink__link-2"
// >
// <i class="qlink__icon" data-feather="mail"></i>
//   </a>
//   <a
// target="blank"
// href="https://calendar.google.com/calendar/r"
// class="qlink__link qlink__link-3"
// >
// <i class="qlink__icon" data-feather="calendar"></i>
//   </a>
//   <a
// target="blank"
// href="https://flipboard.com/"
// class="qlink__link qlink__link-4"
// >
// <i class="qlink__icon" data-feather="bookmark"></i>
//   </a>
//   <a href="https://columns.app" class="qlink__link qlink__link-5">
// <i class="qlink__icon" data-feather="trello"></i>
//   </a>
//   <a
// href="https://www.youtube.com/"
// class="qlink__link qlink__link-6"
// >
// <i class="qlink__icon" data-feather="youtube"></i>
//   </a>

const MAIN_LINKS = [
  {url: 'https://github.com/', icon: 'github'},
  {url: 'https://youtube.com/', icon: 'youtube'},
  {url: 'https://mail.google.com/', icon: 'mail'},
  {url: 'https://maps.google.com/', icon: 'map'},
  {url: 'https://calendar.google.com/', icon: 'calendar'},
  {url: 'https://drive.google.com/', icon: 'folder'},
]

const LIST_LINKS_ONE = [
  {url: 'https://secure.ecs.soton.ac.uk', label: 'ECS'},
  {url: 'https://home.blackboard.soton.ac.uk/', label: 'Blackboard'},
  {url: 'https://notion.so', label: 'Notion'}
]

const LIST_LINKS_TWO = [
  {url: 'https://smile.amazon.co.uk', label: 'Amazon'},
  {url: 'https://reddit.com/', label: 'Reddit'},
  {url: 'https://twoseven.xyz/', label: 'TwoSeven'},
  {url: 'https://netflix.com', label: 'Netflix'},
  {url: 'https://messenger.com', label: 'Messenger'}
]

export default function setLinks() {
  const main = document.getElementById('main')
  const list1 = document.getElementById('list1')
  const list2 = document.getElementById('list2')
  MAIN_LINKS.forEach(link => {
    let node = document.createElement('a');
    node.href = link.url
    node.className = 'qlink__link'
    let icon = document.createElement('i')
    icon.className = 'qlink__icon'
    icon.setAttribute('data-feather', link.icon)
    node.appendChild(icon)
    main!.appendChild(node)
  })

  LIST_LINKS_ONE.forEach(link => {
    let node = document.createElement('a');
    node.href = link.url
    node.className = 'qlist__link'
    node.innerText = link.label
    list1!.appendChild(node)
  })

  LIST_LINKS_TWO.forEach(link => {
    let node = document.createElement('a');
    node.href = link.url
    node.className = 'qlist__link'
    node.innerText = link.label
    list2!.appendChild(node)
  })
}

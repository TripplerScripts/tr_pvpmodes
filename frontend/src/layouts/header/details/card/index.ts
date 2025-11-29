import createElement from '../../../../modules/createElement'

createElement({
  parent: 'player-card',
  className: 'player-left-side',
  content: '<img class="player-avatar" src="https://r2.fivemanage.com/COKMc8Wcmk9K5dp547rEw/Lenix_924.png">'
})

createElement({
  parent: 'player-card',
  className: 'player-right-side'
})

createElement({
  parent: 'player-right-side',
  className: 'player-info',
  content: '<span class="player-level">7</span><div class="player-divider"></div><span class="player-name">Lenix</span>'
})

createElement({
  parent: 'player-right-side',
  className: 'player-level-bar'
})

createElement({
  parent: 'player-level-bar',
  className: 'player-level-bar-fill'
})
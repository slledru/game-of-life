$(document).ready(function () {
  const maxRows = 20
  const maxCols = 20

  // set initial UI state
  $('#stop-tick-btn').attr('disabled', true)
  // $('#clear-btn').attr('disabled', true)
  $('#dump-config-btn').click(dumpConfigBtnClick)
  $('#clear-btn').click(clearBtnClick)
  $('#one-tick-btn').click(oneTickBtnClick)
  $('#start-tick-btn').click(startTickBtnClick)
  $('#stop-tick-btn').click(stopTickBtnClick)

  // draw initial grid
  displayUIGrid()

  // UI grid functions
  function displayUIGrid() {
    for (let i = 0; i < maxRows; i++) {
      const row = $('<tr>')
      for (let j = 0; j < maxCols; j++) {
        const cell = $('<td>')
        row.append(cell)
      }
      $('#ui-grid').append(row)
    }
  }

  // button event handlers
  function startTickBtnClick(event) {
    event.preventDefault()
    $('#dump-config-btn').attr('disabled', true)
    $('#clear-btn').attr('disabled', true)
    $('#one-tick-btn').attr('disabled', true)
    $('#start-tick-btn').attr('disabled', true)
    $('#stop-tick-btn').attr('disabled', false)
  }
  function stopTickBtnClick(event) {
    event.preventDefault()
    $('#dump-config-btn').attr('disabled', false)
    $('#clear-btn').attr('disabled', false)
    $('#one-tick-btn').attr('disabled', false)
    $('#start-tick-btn').attr('disabled', false)
    $('#stop-tick-btn').attr('disabled', true)
  }
  function oneTickBtnClick(event) {
    event.preventDefault()
    console.log('oneTickBtnClick');
  }
  function clearBtnClick(event) {
    event.preventDefault()
    console.log('clearBtnClick');
  }
  function dumpConfigBtnClick(event) {
    event.preventDefault()
    console.log('dumpConfigBtnClick');
  }
})

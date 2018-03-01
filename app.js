$(document).ready(function () {
  // grid dimension
  const maxRows = 20
  const maxCols = 20

  // grid data storage
  let activeCells = {}


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
        const rowColString = `${i},${j}`
        cell.attr('data-row-col', rowColString)
        cell.click(uiGridCellClick)
        row.append(cell)
      }
      $('#ui-grid').append(row)
    }
  }

  // Cell event handler
  function uiGridCellClick(event) {
    event.preventDefault()
    const rowColString = $(this).attr('data-row-col')
    $(this).toggleClass('on')
    if ($(this).hasClass('on')) {
      activeCells[rowColString] = true
    } else {
      delete activeCells[rowColString]
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
  }
  function clearBtnClick(event) {
    event.preventDefault()
  }
  function dumpConfigBtnClick(event) {
    event.preventDefault()
  }
})

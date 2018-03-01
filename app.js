$(document).ready(function () {
  // grid dimension
  const maxRows = 20
  const maxCols = 20

  // grid data storage
  let activeCells = {}

  // interval timer id
  let intervalID = null

  // interval period
  const intervalPeriodMS = 1000

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

  function populateUIGrid() {
    $('td').removeClass('on')
    Object.keys(activeCells).forEach((p) => {
      $(`td[data-row-col="${p}"]`).addClass('on')
    })
  }
  // simulation functions
  function oneTick() {
    // new generation of cells
    const nextTickActiveCells = {}

    // live cells
    for (rowColString of Object.keys(activeCells)) {
      const n = countNeighbors(rowColString)
      if (n === 2 || n === 3) {
        nextTickActiveCells[rowColString] = true
      }
    }

    // dead cells
    for (let i = 0; i < maxRows; i++) {
      for (let j = 0; j < maxCols; j++) {
        const rowColString = `${i},${j}`
        if (!(rowColString in activeCells) &&
          countNeighbors(rowColString) === 3) {
          nextTickActiveCells[rowColString] = true
        }
      }
    }

    // populate next
    activeCells = nextTickActiveCells
    populateUIGrid()
  }
  function countNeighbors(rowColString) {
    // use reduce
    let neighborCount = 0
    const n = neighborhood(rowColString)
    for (let k = 0; k < n.length; k++) {
      if (n[k] in activeCells) {
        neighborCount++
      }
    }
    return neighborCount
  }
  function neighborhood(rowColString) {
    const center = rowColString.split(',').map((x) => +x)
    const row = center[0]
    const col = center[1]

    const upRow = row > 0 ? row - 1 : maxRows - 1
    const downRow = row < maxRows - 1 ? row + 1 : 0
    const leftCol = col > 0 ? col - 1 : maxCols - 1
    const rightCol = col < maxCols - 1 ? col + 1 : 0

    const north = [upRow, col]
    const south = [downRow, col]
    const east = [row, rightCol]
    const west = [row, leftCol]
    const northWest = [upRow, leftCol]
    const southWest = [downRow, leftCol]
    const southEast = [downRow, rightCol]
    const northEast = [upRow, rightCol]

    const directions = [north, south, east, west, northWest, southWest, southEast, northEast]

    return directions.map((p) => `${p[0]},${p[1]}`)
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
    intervalID = setInterval(oneTick, intervalPeriodMS)
  }
  function stopTickBtnClick(event) {
    event.preventDefault()
    $('#dump-config-btn').attr('disabled', false)
    $('#clear-btn').attr('disabled', false)
    $('#one-tick-btn').attr('disabled', false)
    $('#start-tick-btn').attr('disabled', false)
    $('#stop-tick-btn').attr('disabled', true)
    clearInterval(intervalID)
  }
  function oneTickBtnClick(event) {
    event.preventDefault()
    oneTick()
  }
  function clearBtnClick(event) {
    event.preventDefault
    $('td').removeClass('on')
    activeCells = {}
  }
  function dumpConfigBtnClick(event) {
    event.preventDefault()
    console.log(activeCells)
  }
})

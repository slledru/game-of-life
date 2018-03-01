$(document).ready(function () {
  // set initial UI state
  $('#stop-tick-btn').attr('disabled', true)
  $('#clear-btn').attr('disabled', true)
  $('#dump-config-btn').click(dumpConfigBtnClick)
  $('#clear-btn').click(clearBtnClick)
  $('#one-tick-btn').click(oneTickBtnClick)
  $('#start-tick-btn').click(startTickBtnClick)
  $('#stop-tick-btn').click(stopTickBtnClick)

  // button event handlers
  function startTickBtnClick(event) {
    event.preventDefault()
    $('#dump-config-btn').attr('disabled', true)
    $('#clear-btn').attr('disabled', true)
    $('#one-tick-btn').attr('disabled', true)
    $('#start-tick-btn').attr('disabled', true)
    $('#stop-tick-btn').attr('disabled', false)
    console.log('startTickBtnClick');
  }
  function stopTickBtnClick(event) {
    event.preventDefault()
    $('#dump-config-btn').attr('disabled', false)
    $('#clear-btn').attr('disabled', false)
    $('#one-tick-btn').attr('disabled', false)
    $('#start-tick-btn').attr('disabled', false)
    $('#stop-tick-btn').attr('disabled', true)
    console.log('stopTickBtnClick');
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

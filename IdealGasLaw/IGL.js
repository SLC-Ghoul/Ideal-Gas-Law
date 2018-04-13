function convertCelsiusToKelvin(c) {
    k = c + 273
    console.log(k)
}
function convertPascalToAtm(pa){
    atm = pa/ 101325
    console.log(atm)
}





function findTemperature(Pressure, Volume, moles, gasConstant) {
    Temperature = (Pressure * Volume) / (moles * gasConstant)
    console.log(Temperature)
}
function findmoles(Pressure,Volume,gasConstant,Temperature){
    moles = (Pressure * Volume)/(gasConstant * Temperature)
    console.log(moles)   
}



$('#calculate-pressure').on('click',function(){
    function findPressure(Volume, moles, Temperature, gasConstant) {
        Pressure = (moles * gasConstant * Temperature) / Volume
        Rpressure= (Pressure).toFixed(3)
        $('#answer-div').text(Rpressure + ' atm')
    }
    
   $moles = $('#mol-input').val()
   $Volume = $('#volume-input').val()
   $temperature = $('#celsius-input').val()
   $gasConstant = 0.0821
   findPressure($Volume,$moles,$temperature,$gasConstant)
   
})

$('#calculate-volume').on('click',function(){
    function findVolume(pressure, moles, Temperature, gasConstant) {
        volume = (moles * Temperature * gasConstant)/pressure
        rVolume= (volume).toFixed(3)
        $('#answer-div').text(rVolume + " liters")
    
    }
    
   $moles = $('#mol-input').val()
   $pressure = $('#pressure-input').val()
   $temperature = $('#celsius-input').val()
   $gasConstant = 0.0821
   findVolume($pressure,$moles,$temperature,$gasConstant)
   console.log($pressure,$moles,$temperature,$gasConstant)
})

$('#calculate-temperature').on('click',function(){
    function findTemperature(pressure,volume,moles,gasConstant){
        temperature = (pressure * volume)/(moles * gasConstant)
        rtemperature = temperature.toFixed(3)

        $('#answer-div').text(rtemperature + ' Kelvin')
    }
    $pressure = $('#pressure-input').val()
    $volume = $('#volume-input').val()
    $moles = $('#mol-input').val()
    $gasConstant = 0.0821
    findTemperature($pressure,$volume,$moles,$gasConstant)
})

$('#calculate-mol').on('click',function(){
    function findMol(pressure,volume,gasConstant,temperature){
        mol =  (pressure * volume)/(gasConstant * temperature)
        rmol = mol.toFixed(3)
        $('#answer-div').text(rmol + ' mol')

    }
    $pressure = $('#pressure-input').val()
    $volume = $('#volume-input').val()
    $gasConstant = .0821
    $temperature = $('#celsius-input').val()

    findMol($pressure,$volume,$gasConstant,$temperature)
})
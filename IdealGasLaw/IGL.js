

 // Converts celsius to kelvin
$('#celsius-con').on('click',function(){
    event.preventDefault();
    function convertCelsiusToKelvin(celsius){
        var kelvin = parseInt(celsius) + 273
         $('#answer-div2').text(kelvin + ' K')
     } 
    
    $celsius = $('#celsius-con-input').val()
    convertCelsiusToKelvin($celsius)
   
})

// Converts fahrenheit to kelvin
$('#fahrenheit-con').on('click',function(){
    event.preventDefault();
    function convertFahrenheitToKelvin(fahrenheit){
        var kelvin = ((parseInt(fahrenheit) + 459.67)* 5)/9
        var Rkelvin = kelvin.toFixed(3)
        $('#answer-div1').text(Rkelvin + ' K')
    }
    $fahrenheit = $('#fahrenheit-con-input').val()
    convertFahrenheitToKelvin($fahrenheit)
   
})

//function to solve for pressure given volume moles temperature and Ideal Gas constant
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
//function to solve for volume given pressure, moles, temperature, and Ideal Gas Constant
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
// function to solve for temperature given pressure, volume, moles, and Ideal Gas Constant
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
// function to solve for mol given pressure, volume, temperature, and Ideal Gas Constant
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
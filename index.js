let button = document.getElementById('request-device');
button.addEventListener('click', async () => {
    navigator.usb.requestDevice({ filters: [{vendorId: 12714, product_id: 12290}] })
    .then(async device => {
        console.log(device)
    console.log(device.productName);      // "Arduino Micro"
    console.log(device.manufacturerName); // "Arduino LLC"
      await device.open();
    })
    .catch(error => { console.error(error); });

    // const device = await navigator.usb.requestDevice({ filters: [{vendorId: 12714, product_id: 12290}] });
    // console.log(device.configuration);
    // console.log("aaa")
  // try {
  //   await device[0].open()
  //   // await device.selectConfiguration(1) // configurationValue
  //   // await device.claimInterface(0) // interfaceNumber
  // } catch (error) {
  //   console.log(error);
  // }


});


module.exports = {
  tags: ['shortcuts'],
  'Koding Shortcuts Test' : function (client) {
    var config = require('./account.json')
	  // Navigate to Shortcuts screen
		client
	  .maximizeWindow()	  
      .url('http://koding.com')
      .waitForElementVisible('a[href="/Teams"]', 5000)
      .assert.visible('a[href="/Teams"]')
	  .click('a[href="/Teams"]')
	  .assert.visible('input.kdinput.text') 
	  .clearValue('input.kdinput.text')
	  .setValue('input[type=text]', [config.account, client.Keys.ENTER])
	  .waitForElementVisible('input[name="username"]', 5000)	  
	  .setValue('input[name="username"]', config.user)
	  .setValue('input[name="password"]', [config.pass, client.Keys.ENTER])	
	  .waitForElementVisible('div.kdmodal-inner span.close-icon.closeModal', 20000)
	  .click('div.kdmodal-inner span.close-icon.closeModal')
	  .click('span.avatarview.avatar-image-wrapper img')
	  .click('li.account a')	
	  .click('a[href="/Account/Shortcuts"]')

      // Restoring defaults			
	  .click('div.kdview.shortcuts button.kdbutton')
	  .pause(1000)		  
	  .click('div.kdview.kdmodal-buttons button.kdbutton.solid.medium.red')	  
	  .pause(3000)			  

	  // Verify five shortcuts default values
		.assert.containsText('div.kdview.row:nth-of-type(1) div.kdview.col:nth-of-type(3) span:nth-of-type(1)','Ctrl')
		.assert.containsText('div.kdview.row:nth-of-type(1) div.kdview.col:nth-of-type(3) span:nth-of-type(2)','Alt')	
		.assert.containsText('div.kdview.row:nth-of-type(1) div.kdview.col:nth-of-type(3) span:nth-of-type(3)','O')	
		.assert.containsText('div.kdview.row:nth-of-type(2) div.kdview.col:nth-of-type(3) span:nth-of-type(1)','Ctrl')
		.assert.containsText('div.kdview.row:nth-of-type(2) div.kdview.col:nth-of-type(3) span:nth-of-type(2)','Alt')	
		.assert.containsText('div.kdview.row:nth-of-type(2) div.kdview.col:nth-of-type(3) span:nth-of-type(3)','F')	
		.assert.containsText('div.kdview.row:nth-of-type(3) div.kdview.col:nth-of-type(3) span:nth-of-type(1)','Ctrl')
		.assert.containsText('div.kdview.row:nth-of-type(3) div.kdview.col:nth-of-type(3) span:nth-of-type(2)','Alt')	
		.assert.containsText('div.kdview.row:nth-of-type(3) div.kdview.col:nth-of-type(3) span:nth-of-type(3)','V')	
		.assert.containsText('div.kdview.row:nth-of-type(4) div.kdview.col:nth-of-type(3) span:nth-of-type(1)','Ctrl')
		.assert.containsText('div.kdview.row:nth-of-type(4) div.kdview.col:nth-of-type(3) span:nth-of-type(2)','Alt')	
		.assert.containsText('div.kdview.row:nth-of-type(4) div.kdview.col:nth-of-type(3) span:nth-of-type(3)','H')		
		.assert.containsText('div.kdview.row:nth-of-type(5) div.kdview.col:nth-of-type(3) span:nth-of-type(1)','Ctrl')
		.assert.containsText('div.kdview.row:nth-of-type(5) div.kdview.col:nth-of-type(3) span:nth-of-type(2)','Alt')	
		.assert.containsText('div.kdview.row:nth-of-type(5) div.kdview.col:nth-of-type(3) span:nth-of-type(3)','M')			
			  
	  // Update five shortcuts values
		.click('div.kdview.row:nth-of-type(1) div.kdview.col:nth-of-type(2)') 		
		.pause(2000)
		.keys([client.Keys.CONTROL,client.Keys.SHIFT, "a"])
		.keys(client.Keys.NULL)		
		.pause(2000)			
		.click('div.kdview.row:nth-of-type(2) div.kdview.col:nth-of-type(2)')	
		.pause(2000)
		.keys([client.Keys.CONTROL,client.Keys.SHIFT, "b"])	
		.keys(client.Keys.NULL)			
		.pause(2000)			
		.click('div.kdview.row:nth-of-type(3) div.kdview.col:nth-of-type(2)') 		
		.pause(2000)
		.keys([client.Keys.CONTROL,client.Keys.SHIFT, "c"])	
		.keys(client.Keys.NULL)			
		.pause(2000)		 		
		.click('div.kdview.row:nth-of-type(4) div.kdview.col:nth-of-type(2)') 	
		.pause(2000)
		.keys([client.Keys.CONTROL,client.Keys.SHIFT, "d"])
		.keys(client.Keys.NULL)			
		.pause(2000)		
		.click('div.kdview.row:nth-of-type(5) div.kdview.col:nth-of-type(2)')	 		
		.pause(2000)
		.keys([client.Keys.CONTROL,client.Keys.SHIFT, "e"])
		.keys(client.Keys.NULL)			
		.pause(2000)			
		
	  // Verify five shortcuts updated values
		.assert.containsText('div.kdview.row:nth-of-type(1) div.kdview.col:nth-of-type(3) span:nth-of-type(1)','Ctrl')
		.assert.containsText('div.kdview.row:nth-of-type(1) div.kdview.col:nth-of-type(3) span:nth-of-type(2)','Shift')	
		.assert.containsText('div.kdview.row:nth-of-type(1) div.kdview.col:nth-of-type(3) span:nth-of-type(3)','A')			
		.assert.containsText('div.kdview.row:nth-of-type(2) div.kdview.col:nth-of-type(3) span:nth-of-type(1)','Ctrl')
		.assert.containsText('div.kdview.row:nth-of-type(2) div.kdview.col:nth-of-type(3) span:nth-of-type(2)','Shift')	
		.assert.containsText('div.kdview.row:nth-of-type(2) div.kdview.col:nth-of-type(3) span:nth-of-type(3)','B')		
		.assert.containsText('div.kdview.row:nth-of-type(3) div.kdview.col:nth-of-type(3) span:nth-of-type(1)','Ctrl')
		.assert.containsText('div.kdview.row:nth-of-type(3) div.kdview.col:nth-of-type(3) span:nth-of-type(2)','Shift')	
		.assert.containsText('div.kdview.row:nth-of-type(3) div.kdview.col:nth-of-type(3) span:nth-of-type(3)','C')		
		.assert.containsText('div.kdview.row:nth-of-type(4) div.kdview.col:nth-of-type(3) span:nth-of-type(1)','Ctrl')
		.assert.containsText('div.kdview.row:nth-of-type(4) div.kdview.col:nth-of-type(3) span:nth-of-type(2)','Shift')	
		.assert.containsText('div.kdview.row:nth-of-type(4) div.kdview.col:nth-of-type(3) span:nth-of-type(3)','D')			
		.assert.containsText('div.kdview.row:nth-of-type(5) div.kdview.col:nth-of-type(3) span:nth-of-type(1)','Ctrl')
		.assert.containsText('div.kdview.row:nth-of-type(5) div.kdview.col:nth-of-type(3) span:nth-of-type(2)','Shift')	
		.assert.containsText('div.kdview.row:nth-of-type(5) div.kdview.col:nth-of-type(3) span:nth-of-type(3)','E')	

      // Restoring defaults AGAIN...				
	  .click('div.kdview.shortcuts button.kdbutton')
	  .pause(1000)		  
	  .click('div.kdview.kdmodal-buttons button.kdbutton.solid.medium.red')	  
	  .pause(3000)	  
			
	  // Verify five shortcuts default values AGAIN
		.assert.containsText('div.kdview.row:nth-of-type(1) div.kdview.col:nth-of-type(3) span:nth-of-type(1)','Ctrl')
		.assert.containsText('div.kdview.row:nth-of-type(1) div.kdview.col:nth-of-type(3) span:nth-of-type(2)','Alt')	
		.assert.containsText('div.kdview.row:nth-of-type(1) div.kdview.col:nth-of-type(3) span:nth-of-type(3)','O')	
		.assert.containsText('div.kdview.row:nth-of-type(2) div.kdview.col:nth-of-type(3) span:nth-of-type(1)','Ctrl')
		.assert.containsText('div.kdview.row:nth-of-type(2) div.kdview.col:nth-of-type(3) span:nth-of-type(2)','Alt')	
		.assert.containsText('div.kdview.row:nth-of-type(2) div.kdview.col:nth-of-type(3) span:nth-of-type(3)','F')	
		.assert.containsText('div.kdview.row:nth-of-type(3) div.kdview.col:nth-of-type(3) span:nth-of-type(1)','Ctrl')
		.assert.containsText('div.kdview.row:nth-of-type(3) div.kdview.col:nth-of-type(3) span:nth-of-type(2)','Alt')	
		.assert.containsText('div.kdview.row:nth-of-type(3) div.kdview.col:nth-of-type(3) span:nth-of-type(3)','V')	
		.assert.containsText('div.kdview.row:nth-of-type(4) div.kdview.col:nth-of-type(3) span:nth-of-type(1)','Ctrl')
		.assert.containsText('div.kdview.row:nth-of-type(4) div.kdview.col:nth-of-type(3) span:nth-of-type(2)','Alt')	
		.assert.containsText('div.kdview.row:nth-of-type(4) div.kdview.col:nth-of-type(3) span:nth-of-type(3)','H')		
		.assert.containsText('div.kdview.row:nth-of-type(5) div.kdview.col:nth-of-type(3) span:nth-of-type(1)','Ctrl')
		.assert.containsText('div.kdview.row:nth-of-type(5) div.kdview.col:nth-of-type(3) span:nth-of-type(2)','Alt')	
		.assert.containsText('div.kdview.row:nth-of-type(5) div.kdview.col:nth-of-type(3) span:nth-of-type(3)','M')	  

  
  },

  after : function(client) {
    client.end();
  }
};

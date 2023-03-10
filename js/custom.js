$(document).ready(function(){
         
         $('#success_msg').hide();
         $('#error_msg').hide();
         
         $('#register').click(function(){
         
         //console.log("clicked");
         const username=$('#username').val();
         const email=$('#email').val();
         const contact=$('#contact').val();
         const course=$('#course').val();
         const city=$('#city').val();
         const state=$('#state').val();
         const checkbox=$('#checkbox').is(":checked");
         var brochure=false;
         const titleTxt=$('.titleTxt').text();
         if(titleTxt=="Register to Download Brochure")
         {
         brochure=true;
         }
         else 
         {
         brochure=false;
         }
         
         if(checkbox)
         {
         
         		$.ajax({
         				type:'POST',
         				url:"<?=base_url('index.php/Home/enquiry')?>",
         				data:{username:username,email:email,contact:contact,course:course,city:city,state:state,checkbox:checkbox,brochure:brochure},
         				success:function(data){
         					//$('#loader').hide();
         					if(data==1)
         					{
         						/*$('#success_msg').html("Brochure link has been successfully sent on your email!");
         						$("#success_msg").fadeTo(2000, 500).slideUp(500, function(){
         						$("#success_msg").slideUp(500);
         						});*/
         						
         						window.location.href = "<?=base_url('index.php/Thankyou')?>";
         
         					}
         					else if(data==11)
         					{
         						/*$('#success_msg').html("We have received your enquiry and will respond to you within 24 hours.  For urgent enquiries please call us on one of the telephone numbers below.!");
         						$("#success_msg").fadeTo(2000, 500).slideUp(500, function(){
         						$("#success_msg").slideUp(500);
         						});*/
         						window.location.href = "<?=base_url('index.php/Thankyou')?>";
         					}
         					else if(data==404)
         					{
         						$('#error_msg').html("You have already applied for this course");
         						$("#error_msg").fadeTo(2000, 500).slideUp(500, function(){
         						$("#error_msg").slideUp(500);
         						});
         					}
         					else
         					{
         						$('#error_msg').html(data);
         						$("#error_msg").fadeTo(2000, 500).slideUp(500, function(){
         						$("#error_msg").slideUp(500);
         						});
         					}
         				}
         
         			});
         
         }
         else
         {
         						$('#error_msg').html("Please select the Checkbox!");
         						$("#error_msg").fadeTo(2000, 500).slideUp(500, function(){
         						$("#error_msg").slideUp(500);
         						});
         }
         
         });
         
         });
		 
		 //script 2nd
		 
		  function openWin() {
         	//reset();
           $('.titleTxt').html('Register to Download Brochure');
           $('.enquireNowFormCont1').toggleClass('enableEnquire');
           $('.blackBg1').toggleClass('active11');
         }
         
         function applyNow() {
         	//	reset();
              $('.titleTxt').html('Apply Now');
           $('.enquireNowFormCont').toggleClass('enableEnquire');
           $('.blackBg1').toggleClass('active11');
         }
         
         function applyNow2(){
         
           $('.titleTxt').html('Apply Now');
           $('.enquireNowFormCont1').toggleClass('enableEnquire');
           $('.blackBg1').toggleClass('active11');
         }
         
         function reset()
         {
         	//console.log(" reset clicked");
         	document.getElementById("myForm").reset(); 
         }	
		 
		 //script 3rd
		 
		  $(document).ready(function(){
         $('.enquireBtn').click(function(){
         $('.titleTxt').html('Enquire Now');
         $('.enquireNowFormCont').toggleClass('enableEnquire');
         $('.blackBg1').toggleClass('active11');
         });
         
         $('.closeBtn').click(function(){
         $('.enquireNowFormCont').toggleClass('enableEnquire');
         $('.blackBg1').toggleClass('active11');
         
         
         });
         
         });
		 
		 //script 4th
		 
		 $(document).ready(function(){
         $('.enquiryBtn').click(function(){
         $('.enquireNowFormCont1').toggleClass('enableEnquire');
         $('.blackBg1').toggleClass('active11');
         });
         
         $('.closeBtn1').click(function(){
         $('.enquireNowFormCont1').toggleClass('enableEnquire');
         $('.blackBg1').toggleClass('active11');
         
         
         });
         });
		 
		  window.onload = () => {
		  hbspt.forms.create({
               portalId: "14499800",
               formId: "8d2e0377-0ad2-4b46-b040-3d824e7f96ab"
               });
		  }
		 
		 window.onload = () => {
		 
		  var npf_d='https://admission.indiraiimp.edu.in,https://admission.indiraiimppgdm.edu.in';
         var npf_c='5639,5084';
         var npf_m='1';
         var s=document.createElement("script");
         s.type="text/javascript";
         s.async=true;
         s.src="https://track.nopaperforms.com/js/track.js";
         document.body.appendChild(s);
		 
		 }
		 
		  window.onload = () => {
		 var s=document.createElement("script"); s.type="text/javascript"; s.async=true; s.src="https://widgets.in8.nopaperforms.com/emwgts.js"; document.body.appendChild(s); 
		  }
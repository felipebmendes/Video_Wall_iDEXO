<#import "/wcm.ftl" as wcm/>
<!-- @wcm.header authenticated="true"/-->

<!-- WCM Wrapper content -->
<div class="wcm-wrapper-content grad1" style="background-color: black;">
    <!-- Wrapper -->

            <body>
           		<div class="fluig-style-guide">     

							<div class="col-lg-8" style="left: -15px;">
								<div class="editable-slot slotfull layout-1-1" id="slotContainer001">								
    								<@wcm.renderSlot id="Slot001" decorator="false" editableSlot="true" />
								</div>
								
								<div class="editable-slot slotfull layout-1-1" id="slotContainer003" style="position: fixed; left: -25px; bottom: -2px;">								
    								<@wcm.renderSlot id="Slot003" decorator="false" editableSlot="true" />
								</div>
									
								<br>
								<img src="/slide_Show_Briefing/resources/images/super_techies.png" style="height: 25px; z-index: 1; position:fixed; bottom: 0; left: 10px;">
								
							</div> 
						
							<div class="col-lg-4">
								<div class="editable-slot slotfull layout-1-2right" id="slotContainer002" style="top: 1.5%; right: 2%; position: fixed;">
    								<@wcm.renderSlot id="Slot002" decorator="false" editableSlot="true" />
								</div>
							</div>     
							
				</div>
			</body>
</div>
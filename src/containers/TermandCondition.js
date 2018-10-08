import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Form, Button, Checkbox , Divider } from "antd";


class Termandcondition extends Component {

  constructor(props, context) {
    super(props, context);
    this.pushToInformation = this.pushToInformation.bind(this);
    this.onTickCheckbox = this.onTickCheckbox.bind(this);
    this.state = {
      acceptCondition : false

    }
  }

  componentDidMount() {
    
  }

  onTickCheckbox(){
    this.setState({ acceptCondition : !this.state.acceptCondition });
  }

  pushToInformation() {
    this.props.history.push("/information");
};

  render() {

    return (
      // <Form >
        <div >
        <div style={{ maxHeight : "60vh" , overflow : "scroll" , marginLeft: "2vh" , marginRight: "2vh" }}>

            <p>General&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <p >&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Intania Chula Mini Marathon (&ldquo;ICMM&rdquo;) 2019 aims to be an event for everyone to join and build a healthy activity. ICMM is organized the website by using Grouppe. ( &ldquo;The Organiser&rdquo;) in accordance with these Rules and Regulations (the &ldquo;R&amp;Rs&rdquo;) and all the terms and conditions (the &ldquo;T&amp;Cs&rdquo;) applicable to the Participants. By continuing to use The Organiser&rsquo;s services, accessing any part of the website icmm.run, registering for the ICMM, submitting information to The Organiser (and/ or its related entities) whether for the purpose of registering for the ICMM or otherwise, or using any features of the aforementioned website, you signify that you have read, understood and agreed to be bound by the Privacy Policy set forth below (as amended from time to time) in respect of The Organiser&rsquo;s collection, use and disclosure of your personal information. Further, you hereby expressly agree and consent to The Organiser&rsquo;s (including its related entities, as well as their respective agents&rsquo;), collection, use and disclosure of your personal information, in the manner set forth in the aforementioned Policy. Completion of the online registration form confirms the Participant&rsquo;s agreement to abide by these R&amp;Rs. Registration for the race is only confirmed upon payment and issuance of a race identification number. The Participant agrees to:</p>
            <ul>
            <li>provide true, accurate, current and complete information about the Participant contained in the registration form (the &ldquo;Personal Information&rdquo;)</li>
            <li>maintain the security of the Participant&rsquo;s password and identification</li>
            <li>maintain and promptly update of Personal Information to keep it true, accurate, current and complete. The Organiser may contact the Participant from time to time by email. Any notice sent to the email address registered with The Organiser shall be deemed as received by the Participant. If the Participant provides any information that is untrue, inaccurate, not current or incomplete, or if The Organiser has reasonable grounds to suspect that such information is untrue, inaccurate, not current or incomplete, The Organiser may suspend or terminate the Participant&rsquo;s registration and refuse Participants any and all future use of the Official Website (or any parts thereof).No changes to registration details are permitted once registration is completed. (exceptions may only be made for crucial details, e.g. Emergency contact person) The Organiser reserves the right to modify or substitute any of these R&amp;Rs and/or T&amp;Cs from time to time as The Organiser deems fit. If there is ambiguity in any of these provisions, The Organiser shall be the authority to interpret these provisions and in so doing, The Organiser will take into account the interests of all the affected Participants. Any amendments to these R&amp;Rs and/or T&amp;Cs will be updated on the Official Website. The Organiser reserve the right to cancel the ICMM 2019 at any time without prior notice to the Participant, in which case they will make reasonable effort to inform the Participant prior to the date of the event. If the ICMM 2019 is cancelled, there shall be no refund of fees paid. None of The Organiser, TAT, Event Sponsors or Co-Sponsors shall be liable for any other loss or inconvenience caused. The Organiser reserves the right to amend the ICMM 2019 race routes as The Organiser deems fit for the safety of the Participant and/or to prevent any potential hazards in the running of the event, at any time without prior notice to the Participant. In such cases, every effort will be made to inform the Participant prior to the day / date of the event. None of TAT, The Organiser, Event Sponsors or Co-Sponsors shall be liable for any other loss or inconvenience caused.</li>
            </ul>
            <p>&nbsp;</p>
            <p>Cancellation</p>
            <p>After registration, there will be no fee refund for a Participant who does not eventually take part in the ICMM 2019, for any reason whatsoever. A Participant is strictly not allowed to transfer his or her race entry to another party. Any Participant who commences before the actual start time of the race category for which he or she is registered will be disqualified. The start time for the respective race categories can be found on the Official Website. A Participant who does not start within the time given from his or her respective flag off point (10km, 5km Men/Women/Kids) will be disqualified and, for safety reasons, may not be allowed to start.</p>
            <p>&nbsp;</p>
            <p>Baggage Deposit</p>
            <p>The Organiser will not be responsible for any loss and/or damage, personal or otherwise, to the belongings and items deposited at the event baggage storage facility. The Organiser also reserves the right to open and examine any item or baggage deposited for security purposes.</p>
            <p>&nbsp;</p>
            <p>Cut-off Time and DNF (Did Not Finish)</p>
            <p>Participants must complete their respective race categories (which they registered for) within the following cut-off times; otherwise they will be deemed disqualified. (&lsquo;DNF&rsquo;)</p>
            <p>&nbsp;</p>
            <p>Mini 10KM &ndash; 2 hours after last flag off</p>
            <p>Fun Run 5KM &ndash; 2 hours after last flag off</p>
            <p>Note: There might be staggered cut-off times at selected sections of the race route. Details of these cut off points will be released closer to race day. For participants&rsquo; safety and to avoid being caught in between live traffic, participants must obey as instructed, or they will be pulled off the race course immediately.</p>
            <p>&nbsp;</p>
            <p>Awards</p>
            <p>Overall Categories Winner:</p>
            <ul>
            <li>Men&rsquo;s and Woman&rsquo;s top 2: 2 trophies (no age range)</li>
            <li>Chula engineering alumni and current student: 2 trophies (no age range)</li>
            <li>Men Awards:
            <ul>
            <li>Under 24 years old 5 trophies</li>
            <li>25-29 years old 5 trophies</li>
            <li>30-34 years old 5 trophies</li>
            <li>35-39 years old 5 trophies</li>
            <li>40-44 years old 5 trophies</li>
            <li>45-49 years old 5 trophies</li>
            <li>50-54 years old 5 trophies</li>
            <li>55-59 years old 5 trophies</li>
            <li>Over 60 years old 5 trophies</li>
            </ul>
            </li>
            </ul>
            <p>Total 45 trophies</p>
            <ul>
            <li>Woman Awards:
            <ul>
            <li>Under 24 years old 5 trophies</li>
            <li>25-29 years old 5 trophies</li>
            <li>30-34 years old 5 trophies</li>
            <li>35-39 years old 5 trophies</li>
            <li>40-44 years old 5 trophies</li>
            <li>45-49 years old 5 trophies</li>
            <li>Over 50 years old</li>
            </ul>
            </li>
            </ul>
            <p>&nbsp;</p>
            <p>Total 35 trophies</p>
            <p>&nbsp;</p>
            <p>Runner&rsquo;s Entitlement</p>
            <p>After applying for ICMM2019, any information cannot be changed.</p>
            <p>&nbsp;</p>
            <p>PRIVACY POLICY</p>
            <p>CONSENT</p>
            <p>&nbsp;</p>
            <p>By continuing to use The Organiser&rsquo;s services, accessing any part of the website icmm.run, registering for the ICMM2019, submitting information to The Organiser (and/ or its related entities) whether for the purpose of registering for the ICMM2019 or otherwise, as well as using any features of the aforementioned website, you signify that you have read, understood and agree to be bound by this Policy (as amended from time to time) in respect of The Organiser&rsquo;s collection, use and disclosure of your personal information. Further, you hereby agree and consent to The Organiser&rsquo;s (including its related entities, as well as their respective Agents&rsquo;), collection, use and disclosure of your personal information, in the manner set forth in this Policy.</p>
            <p>SUPPLEMENT</p>
            <p>&nbsp;</p>
            <p>This Policy is meant to supplement any Agreements governing your relationship with The Organiser (and its related entities), and should be read in conjunction with those Agreements. Further, all consent provided pursuant to this Policy is meant to supplement and not supersede or replace any other consent you may have previously provided to The Organiser (and its related entities) in respect of your personal information.</p>
            <p>&nbsp;</p>
            <p>PERSONAL INFORMATION</p>
            <p>&nbsp;</p>
            <p>The types of personal information collected by The Organiser broadly fall within the ambit of the following categories:</p>
            <p>&nbsp;</p>
            <p>Personal Data</p>
            <p>&nbsp;</p>
            <p>This includes the following:</p>
            <p>&nbsp;</p>
            <p>Information which can be linked back to the Participant. For example, the name, gender, date of birth, Passport No., and ID No.;The Participant&rsquo;s contact information. For example, the mailing address, the area of residence, telephone number, and email address;The Participant&rsquo;s payment information. For example, the credit card number, the debit card number, the name of the card holder, the card number, the billing address, and the expiration date of the credit/ debit card;The Participant&rsquo;s health information. For example, whether the participant has any known allergies, or any known medical conditions;andThe participant&rsquo;s technical information. For example, the IP address from which the registration form is accessed, completed and submitted.</p>
            <p>&nbsp;</p>
            <p>Statistical Data</p>
            <p>&nbsp;</p>
            <p>This includes the following:</p>
            <p>&nbsp;</p>
            <p>The number of Participants; and The number of hits to the website icmm.run</p>
            <p>&nbsp;</p>
            <p>For the avoidance of doubt, Statistical data is stored purely for analytical purposes, and is entirely anonymous. Statistical data will not be tied to the Participant record, and will only be aggregated for statistical analysis so that The Organiser can better understand the Participant&rsquo;s profile and improve the service offering.</p>
            <p>&nbsp;</p>
            <p>COLLECTION OF PERSONAL INFORMATION</p>
            <p>&nbsp;</p>
            <p>Generally, The Organiser collects personal information in the following ways:</p>
            <p>&nbsp;</p>
            <p>When you contact The Organiser (and/ or any of its related entities);When you submit forms or applications to The Organiser (and/ or any of its related entities) (including but not limited to the Registration Form for the ICMM);When you submit queries or requests to The Organiser; When you submit complaints; When you provide feedback; When you respond to The Organiser&rsquo;s request to provide further information; When you visit the website icmm.run; When you submit your personal information to The Organiser, for any other reasons; and If and when you provide The Organiser (and/ or any of its related entities) with any personal information relating to a third party (including but not limited to that of a dependent and/ or spouse), by submitting such information to us, you warrant and represent to The Organiser that you have obtained the consent of that third party, to your providing The Organiser with their personal information, for the respective purposes.</p>
            <p>&nbsp;</p>
            <p>By providing personal information to The Organiser (and/ or any of its related entities), you confirm that the information is complete, and accurate, to the best of your belief, and knowledge. Failure to abide by the said requirement, may result in The Organiser&rsquo;s inability to fulfil your requests and/ or applications.</p>
            <p>&nbsp;</p>
            <p>PURPOSES FOR COLLECTION, USE AND DISCLOSURE OF PERSONAL INFORMATION</p>
            <p>&nbsp;</p>
            <p>Generally, The Organiser collects, uses, and discloses your personal information for the following purposes:</p>
            <p>&nbsp;</p>
            <p>To facilitate your registration for the ICMM; To verify your identity; To communicate with you; To respond to your queries; To respond to your requests; To manage administrative and business operations of The Organiser, and to comply with The Organiser&rsquo;s internal policies and procedures; To match any personal information held by The Organiser (and/ or any of its related entities) which relates to you, for any of the purposes specified; To facilitate maintenance of security during the ICMM; For planning, research, data-planning, and data-processing activities; For statistical and/ or risk assessment and analysis; For fund-raising; For analysing the effectiveness of our advertisements, competitions and promotions; To comply with any applicable laws, rules, regulations, and guidelines (which may be issued by the concerned authorities);For record keeping purposes (where there are legal and/ or business reasons for retaining the said records);For legal purposes (including but not limited to the obtaining of legal advice; to facilitate dispute resolution; and to investigate suspected unlawful activities including intellectual property infringement); and/or For purposes which are reasonably related to the aforesaid.</p>
            <p>&nbsp;</p>
            <p>DISCLOSURE OF PERSONAL INFORMATION</p>
            <p>&nbsp;</p>
            <p>We have identified the nature of personal information which may be collected, in the preceding paragraphs, as well as the specific purposes for the collection, use and/ or disclosure of the personal information. To the extent feasible and practicable, generally, your personal information held by us shall be kept confidential. In order to provide you with effective and quality services, and for the purposes listed in the preceding paragraphs (where applicable), your personal information may be disclosed to the following: The Organiser&rsquo;s related entities; Agents, contractors and/ or third party service providers who provide operational services in relation to the ICMM; Any business partner, investor, assignee and/ or transferee (actual or prospective);Our advertising, marketing and promotional agencies, to help us inter alia deliver and analyse the effectiveness of our campaigns and promotions; External banks, credit card companies and their respective service providers; The Organiser&rsquo;s professional advisers (including but not limited to its legal advisors, auditors and financial advisors);Appropriate government authorities, statutory boards and law enforcement authorities, to comply with the applicable laws, rules and regulations; Counterparties, billing organisations and their respective banks, in relation to fund transfers and payments; and/or Any other party to whom you authorise us to disclose your personal information.</p>
            <p>&nbsp;</p>
            <p>To the extent feasible and practicable, The Organiser shall endeavour to ensure that its employees who are involved in the collection, use and disclosure of any personal information, will adhere to the stipulations contained in this Policy.</p>
            <p>&nbsp;</p>
            <p>WITHDRAWAL OF CONSENT, ACCESS TO AND CORRECTION OF PERSONAL INFORMATION</p>
            <p>&nbsp;</p>
            <p>The Organiser recognizes the need to maintain accuracy, currency and completeness of personal information collected. If you wish to have access to, review, incorporate amendments, and update your personal information, please follow the instructions specified hereinbelow:</p>
            <p>&nbsp;</p>
            <p>If you wish to:</p>
            <p>&nbsp;</p>
            <p>Withdraw your consent to any use of your personal information as set out in this Policy; Have access to and/ or incorporate amendments/ updates to your personal information; and/ or Have any queries or feedback pertaining to your personal information;</p>
            <p>&nbsp;</p>
            <p>The Organiser can be contacted through any of the following modes:</p>
            <p>&nbsp;</p>
            <p>By email: <span><a href="mailto:info@grouppe.co">info@grouppe.co</a></span></p>
            <p>For the avoidance of doubt, the aforementioned request will be deemed to have been formally made and will be taken on record, only if received in a written form (via email).</p>
            <p>&nbsp;</p>
            <p>The Organiser will, upon receipt of your aforementioned written request, allow you to view your stored personal information. To the extent permitted by law, The Organiser reserves the right to charge a reasonable administrative fee for the said service. The Organiser will endeavour to respond to your written request within a reasonable timeframe. In exceptional circumstances, The Organiser reserves its right to deny you access to your personal information, and may provide you with an explanation as may be required by applicable law. Some of these circumstances includes: Where an investigating authority/statutory authority/ government body objects to The Organiser complying with a participant&rsquo;s said request, Where the information may, in the exercise of The Organiser&rsquo;s reasonable discretion, have a bearing on the life or security of an individual; and/or Where the personal information is collected in connection with an investigation of a breach of contract, and/ or contravention of applicable laws, rules and regulations. Kindly note that if you withdraw your consent to any or all use of your personal information by The Organiser, depending upon the nature of request, The Organiser may not be in a position to continue to provide its services to you, and the said action of withdrawal of consent (whether partial or total) may be deemed to be a termination by you of any contractual relationship which you may have with The Organiser. Further, under such circumstances, you may be in breach of your contractual obligations. In such an event, all of The Organiser&rsquo;s (and its related entities) rights are hereby fully and expressly reserved.</p>
            <p>&nbsp;</p>
            <p>RETENTION OF PERSONAL INFORMATION</p>
            <p>&nbsp;</p>
            <p>The Organiser will retain the personal information collected, for as long as it is necessary to fulfil the purpose for which it was collected, the legal and/ or business purposes of The Organiser, and/ or as may be required by applicable law. When destroying personal information, The Organiser will take commercially reasonable and technically feasible and practicable measures to make the personal information irrecoverable or irreproducible, as may be required by applicable law.</p>
            <p>&nbsp;</p>
            <p>SECURITY SAFEGUARDS</p>
            <p>&nbsp;</p>
            <p>The Organiser takes the security and protection of your personal information very seriously. As such, The Organiser has put in place appropriate reasonable security arrangements to protect your personal information against loss or theft, as well as against unauthorised access and undue disclosure. Some of the security arrangements include secure servers, firewalls, and encryption of credit card information. Unfortunately, there is always a potential risk in sending information through any channel (more so through the internet) and/ or retaining information on any storage device, and The Organiser cannot guarantee that communications between you and The Organiser or information stored on The Organiser&rsquo;s resources, including personal information, will be free from unauthorized access by third parties. To the extent permitted by applicable law, The Organiser (and its related entities) will not be held responsible for:o for any unauthorized access and/ or illegal or unauthorized use of information, including personal information; and/oro if your information, including personal information, is accessed through unauthorized and/ or improper use of your account or login information or due to your failure to secure your username, password, or customer ID. Further, if you do not take reasonable measures to ensure the continued confidentiality and accuracy of the personal information, to the extent permitted by applicable law, The Organiser will not be liable for any consequential misuse. If you have any concerns about security of your personal information disclosed to The Organiser, you should contact The Organiser.</p>
            <p>&nbsp;</p>
            <p>UPDATES TO THE PRIVACY POLICY</p>
            <p>&nbsp;</p>
            <p>The Organiser may from time to time update this Policy to ensure that the Policy is in compliance with any future developments, industry trends and/ or any changes in the legal and/ or regulatory requirements. Subject to your rights at law, you agree to be bound by the prevailing terms of the Policy as updated from time to time on the website amazingthailandmarathon.com. Please check back regularly for updated information on the handling of your personal information.</p>
            <p>&nbsp;</p>
            <p>USE OF COOKIES, CLICKSTREAM DATA AND LINKS TO OTHER WEBSITES</p>
            <p>&nbsp;</p>
            <p>In order to enable certain parts of the website amazingthailandmarathon.com com to function correctly, we employ cookies. Cookies are small data files that are transferred to your computer&rsquo;s hard drive from your web browser, to recognise your preferences. The cookies do not contain your Personal Data (unless you specifically chose the &ldquo;Remember Me&rdquo; feature), but only Statistical Data which is entirely anonymous. Please refer to your browser&rsquo;s documentation to check if cookies have been enabled on your computer or to request not to receive cookies. In order to improve your online experience, The Organiser may track clickstream data to advance your use of the web pages and to track referrals from other websites. Such data will not be stored as part of your personal information. It will only be collected for statistical analysis. The website amazingthailandmarathon.com may contain links to other websites. Your access to the said linked websites is at your own risk and to the extent permitted by law, The Organiser shall not be held responsible for your access to the said linked websites and the consequences which may flow therefrom. Whilst The Organiser will protect your personal information collected by it directly, The Organiser cannot control or be responsible for the policies of other websites that may be linked to it, or the use of any personal information which you may share with them. Please note that this Policy does not cover these other websites, and The Organiser would recommend that you are apprised of their specific policies.</p>

        </div>

        <Divider style= {{ marginTop : "5vh" }} />
        <div style= {{display : "flex", flexFlow: "column wrap" }} >
        <Checkbox style={{ margin : "15px auto"  }} onClick={this.onTickCheckbox} > คุณได้ยอมรับเงื่อนไขด้านบนทั้งหมดแล้ว</Checkbox>
        <Button  
        style= {{ width : "50vh" , margin: "0 auto" , marginTop : "2vh"}} 
        disabled={this.state.acceptCondition ? false : true} 
        type="primary"
        onClick={this.pushToInformation}> ตกลง </Button>
        </div>


        </div>
        


 
    );
  }
}

export default withRouter(Form.create()(Termandcondition));

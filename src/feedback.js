const growth = [{
  L: 'Your innovation or invention has a small impact on society. It may already exist or be defined as uninteresting towards customers. More developed companies are providing similar products already. Increase your knowledge significantly and try to distinguish as much as possible from competitors with similar products.',
  M: 'Your innovation or invention has a medium impact on society. It may already exist on a low scale. More developed companies are providing similar companies, but there is the possibility for your startup to catch up and surpass them with the right approach. Increase your knowledge significantly and try to distinguish as much as possible from competitors with similar products.',
  H: 'Your innovation or invention has a great impact on society. It does not exist anywhere else. With the right approach you are able to catch customer interest and generate success for your startup. Keep up-to-date with the knowledge about your product/service in order to stay ahead of your competitors.',
}, {
  L: 'Your start-up performs poorly on sustainable development. It is recommended to improve all of the start-up’s sustainability aspects: 1) System thinking, 2) Embracing diversity and interdisciplinarity, 3) Foresighted thinking, 4) Norms and values, 5) Matter of action in enhancing sustainable growth, 6) Ability to construct and apply interventions, transitions and transformative sustainable governance strategies, and 7) capability of comprehending, comparing and critically evaluating different perspectives and preferences.',
  M: 'Your start-up performs average on sustainable development. It is recommended to increase the success of your start-up’s sustainability aspects, especially the ones that you scored low on: 1) System thinking, 2) Embracing diversity and interdisciplinarity, 3) Foresighted thinking, 4) Norms and values, 5) Matter of action in enhancing sustainable growth, 6) Ability to construct and apply interventions, transitions and transformative sustainable governance strategies, and 7) capability of comprehending, comparing and critically evaluating different perspectives and preferences.',
  H: 'Your start-up performs high on sustainable development. Keep up your current actions within sustainable growth.',
}, {
  L: 'You are not prepared to engage in a corporate-startup collaboration. Improve significantly in all five challenges: 1) Duration of sales cycle, 2) Inability to pitch to business units, 3) Client’s protective middle management, 4) Sufficient resources, and 5) Product decision and roadmap.',
  M: 'You are averagely prepared to engage in a corporate-startup collaboration. Work on the five challenges to improve your collaboration skill set, especially the ones that you scored low on: 1) Duration of sales cycle, 2) Inability to pitch to business units, 3) Client’s protective middle management, 4) Sufficient resources, and 5) Product decision and roadmap.',
  H: 'You are well prepared to engage in a corporate-startup collaboration. Keep up your current actions and try to slightly improve them even more if possible.',
}, {
  L: 'You are not prepared to engage in customer and/or enterprise sales. Improve significantly in all five statements: 1) Infrastructure and attitude is matched to a potential acquirer, 2) Level of professionalism and standardisation in terms of minimising liability in the business, 3) Data management and financial management, 4) Relationships with suppliers and other third party connections, and 5) Location and operation.',
  M: 'You are averagely prepared to engage in customer and/or enterprise sales. Work on the 5 statements to improve your start-up behaviour: 1) Infrastructure and attitude is matched to a potential acquirer, 2) Level of professionalism and standardisation in terms of minimising liability in the business, 3) Data management and financial management, 4) Relationships with suppliers and other third party connections, and 5) Location and operation.',
  H: 'You are well prepared to engage in customer and/or enterprise sales. Keep up your current actions and try to slightly improve them even more if possible.',
}];

const adaptability = [{
  L: 'The current setup needs to be reconsidered to be able to survive against the competitors (new and existing) and other substitutes in the market. The suppliers have a high bargaining power in startups and your product/service should have easy access to different suppliers to adapt to future changes. The cost of changing from one supplier to another needs to be considered at this stage. Your product/service must stand out between other competitors, substitutes and new entrants and multiple factors can be examined including the switching costs to buyers, the speed to accommodate for new changes and the number of existing resources.',
  M: 'Your product/service can survive in the market against new and existing competitors in addition to other substitutes in the market. It is preferable to consider some changes to ensure a higher rate of success. Some of those changes include the suppliers available to cater for future changes and the cost of changing from one supplier to another, the switching costs to buyers to use other competitors’ products/services or substitutes, the speed to accommodate for new changes and the number of existing resources.',
  H: 'Your product/service has a stable market position and is able to adapt easily against new and existing competitors and other substitutes in the market. The bargaining power of suppliers is limited due to the consideration of different suppliers and your product/service offers a unique selling proposition.',
}, {
  L: 'Key trends have a high risk on the existence of your product/service. Before proceeding, a full analysis is required to be performed for the markets where your product/service needs to expand in. The analysis should cover the existing governmental regulations, the culture and society and ensure available analytical capabilities are in place to detect any changes in the future.',
  M: 'Your product/service needs to make use of the analytical capabilities to ensure that the key trends are evaluated and treated properly. The data used in the analysis should cover governmental regulations and relevant culture and society information. The tools will be proactive to mitigate the risks and optimize the customer experience.',
  H: 'Your product/service is able to adapt to key trends and has a high chance to capture market opportunities. The government policies, culture and society were taken into account while building the startup and considering the future market expansions. An important aspect is the analytical capabilities that are beneficial and proactive to mitigate the risks and continuously optimize the customer experience.',
}, {
  L: 'Your product/service is not designed in a proper way to take into account the increase or decrease in the demand. It should offer the right marketing tactics that engage the consumers and increase the sales while being able to cater for the change in the demand. The future roadmap must consider that the existing product/service has new potential segments or alternatives that are scalable across different channels and regions. The distribution channels might combine the sales, delivery or service channels.',
  M: 'Your product/service can scale with some limitations that need to be taken into consideration based on changes in the demand. Sufficient marketing tactics need to be available to engage the consumers and increase the sales. The future roadmap should cover new potential segments or alternatives and your product/service growth plans must cater for different regions and use a combination of distribution channels for sales, delivery or service.',
  H: 'Your product/service design is scalable across different regions and distribution channels regardless of the change in the demand. The marketing tactics consider engaging the consumers and increasing the sales in an effective way. As for the distribution channels, the combination of sales, delivery or service channels used develop and sustain good relationships with customers.',
}, {
  L: 'The Macro Economic Forces impose a high threat on your product/service and need to be closely monitored in order for your product/service to survive. The inflation, gross domestic product (GDP), national income, and unemployment rates are some of the examples that will affect the capital and global market conditions. Your product/service should also consider the technology used and whether it might become obsolete and risk the existence of your startup. Another important area to keep an eye on is the key resources and whether replacements are easy to find in the market.',
  M: 'Your product/service is affected by changes in the capital, inflation, gross domestic product (GDP), national income, and unemployment rates but can still get through those challenges by monitoring them closely to lower the risks. A plan to replace the resources and technologies should also be in place to adapt to future needs and requirements.',
  H: 'The Macro Economic Forces have minimal risks on the existence of your startup. Some of those forces include the inflation, gross domestic product (GDP), national income, and unemployment rates. Another important area that is well managed is the key resources that are replaceable and available in the market. Your product/service is using the right technology which is a significant aspect to handle future needs and requirements without the impact of being obsolete.',
}];

const desirability = [{
  L: 'The product/service does not have any perceived value for the customer. Make sure to understand your potential customers better.',
  M: 'The product/service has some value for the customer. Make sure you solve the right problem.',
  H: 'The product/service offers significant value for the customer.',
}, {
  L: 'Customers are unaware of the product/service. Make sure you analyse their needs.',
  M: 'Customers are somewhat aware of the product/service. You should survey customers to better understand them.',
  H: 'Customers are aware of the product/service and you determined customer focus.',
}, {
  L: 'The price is too high for the quality. Lower the price or increase quality.',
  M: 'The price might be too high for the quality. Consider adjusting the price or clearly communicate the product/service’s accessibility or ease of use.',
  H: 'The price/quality ratio is aligned well and the product is easy to use.',
}, {
  L: 'You did not identify competitors offering a similar product/service. You should know what the competition is doing and offer a unique product/service.',
  M: 'You identified some similar products/services. Make sure to understand the differences and the shortcomings between the products/services.',
  H: 'You identified similar products/services and can explain the differences and shortcomings.',
}, {
  L: 'You did not identify multiple segments. You should target different customers in a unique manner.',
  M: 'You identified some customer segments. Make sure to understand their demographics and have different strategies.',
  H: 'You identified and understood all customer segments and have different strategies for each.',
}];

const finance = [{
  L: 'You did not identify multiple segments and missing information on revenue. There is no revenue generated and is not related to the core mission, vision and strategy of the start up. There is dependency on one customer.',
  M: 'You identified some segments of revenue. The revenue is related to the core mission, vision, and strategy but is not recurring in the natural process of the startup.',
  H: 'You identified and understood all segments of your startups revenue stream. It is related directly to the core mission, vision, and strategy. The revenue is not concentrated and recurs with naturality.',
}, {
  L: 'Your operating expenses can be reassessed to better the start up’s life expectancy. These expenses recur with frequency and these expenses are related to the survival of the startup. The burn rate of capital is harming your startup while not benefiting from scale operations.',
  M: 'Some segments of the operating expenses are in the right direction. Still do not fully control the expenses to happen less frequent and help you with the survival of the start up. The start up is operating efficiently in some areas and others areas need attention to be able to work in scale operations. By moving to scale operations you can then benefit from better prices.',
  H: 'You have different strategies for operational expenses. The startup has expenses occurring every quarter but with no frequency. The intensity burn rate of capital is controlled and the start up is benefiting from scale.',
}, {
  L: 'The cash flow and profitability of the startup can be further improved to not be survigint on the edge. The startup is not solvent, with greater liabilities than assets. The creation of new assets is in no interest. There is not enough capital raised to help the startup become solvent. The path to profitability is not clear but can be improved by creating new assets.',
  M: 'Some segments on cash flow and profitability were identified. The start up is not fully solvent but has more assets than liabilities which leads it in the right direction. The startup is finding ways to create new assets with reserves performing to standard. The start up has a plan for capitalization but not yet applied.',
  H: 'All segments are identified and the startup has different strategies for cash flow and profitability. The startup is solvent and with greater assets than liabilities. The plan for profitability is well established. The startup can maintain itself like this if every year attention is established to maintain these areas.',
}, {
  L: 'The personnel needed for a startup is not clear and maybe needs to be further analyzed. The startup is not likely to survive without personnel. The personnel is poorly educated on tasks and the startup pays high rents for a place of operation. The startup can further evaluate if professionals are needed in different areas.',
  M: 'The personnel have some benefits on working at the start up and are in the process of acquiring a new operation building. The personnel is limited but with the capacity to perform the tasks. The startup knows the need for different roles but is finding ways to afford these different professionals.',
  H: 'The startup has different strategies for personnel and knows exactly the roles that need to be filled to be successful. The startup has personnel that are all qualified for the performed tasks. The startup has its own building with people benefiting from working at the place. If managed well this can increase the efficacy of the startup.',
}, {
  L: 'The startup is not clear in the financing steps for its survival. The startup is not self invested. The COVID-19 recession has delayed the plans for the start, but can be further planned for when the recession passes. The startup has high numbers of debts with not fundraising plans to support it. The start up is closed for new investors.',
  M: 'The financing plans are in the right direction. THe COVID-19 recession has impacted the start up nut not enough to not start when planned. The startup has a clear view where it belongs in the industry with a mix of self investment and raised capital. With proper management the startup can become self financed and head in the right direction.',
  H: 'The financing plans are clear. The COVID-29 recession has not impacted the start up plans with enough capital to start in time. The startup falls under a specific industry and with raised money to fund itself. The startup has low numbers of debts and is always open for new investors. With these finances and structured progress the startup can become stable and sustainable in the long run.',
}, {
  L: 'The future business development plan is not worked out thoroughly. The startup has no clear plans for future development, with no other international markets in sight, and no measures taken to start at new markets. Going back to the core values of the startup can provide the sense of direction needed and further develop a plan where the startup might want to be in the future.',
  M: 'Some segments on future business development plans are clear and complete. The startup has direction and some ideas for the future. The start up has some international markets in sight but has not taken measures to create those connections. By setting some time apart to further develop the areas of the plans that are not so clear the startup can move further with the necessary steps to grow.',
  H: 'The future business development plans and steps are clear. The startup has a clear direction on the future development plans with a lot of potential countries and has taken all the steps to enter new markets. With always being clear with the steps to take and following the startup’s core values, the direction of the startup will be a positive one.',
}];

const ambition = [{
  L: 'The presenter does not communicate the idea in a convincing manner and should work on that. Points for improvement can be the prose and the explanation of the idea.',
  M: 'The presenter communicates the idea rather convincingly, but could still work on improving his performance. The points of improvement are few and specific.',
  H: 'The presenter communicates his idea clearly and convincingly.',
}, {
  L: 'The presentation does not communicate the idea clearly to the audience and should be improved upon. Points of improvement are related to the form of the presentation e.g. professionality.',
  M: 'The presentation communicates the idea to the audience, but steps can be made to improve this further. These steps are few and specifically related to those statements that were given a low score.',
  H: 'The presentation enhances the business idea for the audience and meets all requirements.',
}, {
  L: 'The long term vision is either absent or not explained well. To improve the business concept, more time needs to be spent on realistically clarifying the business concept.',
  M: 'The long term vision is present, but could be improved upon with specific adjustments related to the statements.',
  H: 'The long term vision is clear and realistic.',
}];

const competition = [{
  L: 'The position of competitors may be too strong for the business concept to work. Therefore, the market position may need to be redefined based on the competitors.',
  M: 'There are strong competitors present, but the business concept may still work. When implementing the idea, keep the strong competition in mind and react to them.',
  H: 'There are few strong competitors in the market, enabling a strong starting position for the business concept.',
}, {
  L: 'The expectation of your market growth compared to your competitors may be too small for the business idea to work. Revisit your expectation of your market share with new insights and data.',
  M: 'There is a standard expected growth of your business for the market you are operating in compared to your competitors.',
  H: 'The company is expected to grow rather quickly compared to your competitors.',
}, {
  L: 'The brand of the company will not be strong and a new brand development plan may need to be considered. Also look into new opportunities for brand definition and development.',
  M: 'The brand will be familiar to people specifically looking in the sector, but not to the average person. The brand has potential to become more well known, but does not necessarily need to be.',
  H: 'The brand has the potential to grow into something familiar to the everyday person.',
}];

const feedback = {
  growth,
  adaptability,
  desirability,
  finance,
  ambition,
  competition,
};

export default feedback;

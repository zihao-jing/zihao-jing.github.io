---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

## Teaching LLMs the Language of the World

I am a second-year Master student at [Department of Computer Science](https://www.csd.uwo.ca/), [Western University](https://www.uwo.ca/), under the supervision of [Prof. Pingzhao Hu](https://phulab.org/).

Two first-author papers were accepted at top conferences (NeurIPS and ICLR) in my first year.

My research interest includes

CV.


<!-- # 🔥 News
- *2022.02*: &nbsp;🎉🎉 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2022.02*: &nbsp;🎉🎉 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  -->

# 📝 Publications 

🎓During My Master’s Research Program
<!-- Start the frist paper -->
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICLR 2026</div><img src='images/archs/iclr_main.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Entropy-Guided Dynamic Tokens for Graph-LLM Alignment in Molecular Understanding](https://arxiv.org/pdf/2602.02742) [**[Code]**](https://github.com/zihao-jing/DQ-Former) <strong><span class='show_paper_citations' data='EXAMPLE_CITATION_ID'></span></strong>

**Zihao Jing**, Qiuhao Zeng, Ruiyi Fang, Yan Sun, Boyu Wang, Pingzhao Hu

**Challenges:** Current structure-to-LLM alignment pipelines often compress non-text inputs into a fixed number of query tokens. This fixed budget tends to discard fine-grained relational structure and local context, weakening downstream reasoning. In addition, many existing bridges depend on end-to-end fine-tuning of large backbones, which is compute-heavy and can be brittle across tasks and domains. 

**Our solutions:** We introduce an entropy-guided dynamic tokenization bridge that allocates a variable number of query tokens to the most informative local regions of the input graph/structure, preserving salient relations while avoiding over-compression. To improve efficiency and stability, we align the structure encoder with the LLM using a lightweight connector only—keeping both backbones frozen—so adaptation is fast, modular, and less prone to catastrophic drift.

</div>
</div>

<!-- Second paper -->
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">NeurIPS 2025</div><img src='images/archs/nips_Main_structure_vn_.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Structure-Aware Fusion with Progressive Injection for Multimodal Molecular Representation Learning](https://arxiv.org/pdf/2510.23640) [**[Code]**](https://github.com/your-username/your-project) <strong><span class='show_paper_citations' data='EXAMPLE_CITATION_ID'></span></strong>

**Zihao Jing**, Yan Sun, Yan Yi Li, Sugitha Janarthanan, Alana Deng, Pingzhao Hu
- We propose a novel approach for sequence modeling using transformer architectures. Our method achieves state-of-the-art results on multiple benchmark datasets and demonstrates significant improvements in efficiency and accuracy.
</div>
</div>

- [Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet](https://github.com), A, B, C, **CVPR 2020**

# 🎖 Honors and Awards
- *2021.10* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2021.09* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 

# 📖 Educations
- *2019.06 - 2022.04 (now)*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2015.09 - 2019.06*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 

# 💬 Invited Talks
- *2021.06*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2021.03*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  \| [\[video\]](https://github.com/)

# 💻 Internships
- *2019.05 - 2020.02*, [Lorem](https://github.com/), China.
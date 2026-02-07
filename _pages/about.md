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

My research interests include **Large Language Models (LLMs)** and **Multimodal LLM Reasoning**, with a focus on teaching LLMs to understand the world by integrating diverse modalities. I am also interested in **AI for Science**.


<!-- # 🔥 News
- *2022.02*: &nbsp;🎉🎉 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2022.02*: &nbsp;🎉🎉 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  -->

# 📝 1st-Author Publications
- 🎓 Top Conferences During Master's

<!-- Start the frist paper -->
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICLR 2026</div><img src='images/archs/iclr_main.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**? How can LLMs understand 2D/3D structure, e.g., molecules?**

[Entropy-Guided Dynamic Tokens for Graph-LLM Alignment in Molecular Understanding](https://arxiv.org/pdf/2602.02742) [**[Code]**](https://github.com/zihao-jing/DQ-Former) <strong><span class='show_paper_citations' data='EXAMPLE_CITATION_ID'></span></strong>

**Zihao Jing**, Qiuhao Zeng, Ruiyi Fang, Yan Sun, Boyu Wang, Pingzhao Hu

**Challenges:** Current approach (1) compress graph into a fixed-length tokens ([Q-Former style](https://arxiv.org/abs/2301.12597)), discarding fine-grained context for larger entities; (2) depend on heavy end-to-end tuning.

**Our solutions:** (1) Entropy-Guided Patching allocates dynamic tokens for informative regions based on entropy, preserving salient relations while avoiding over-compression, (2) enabling connector-only alignment training. SOTA on 9/10 molecular tasks and 7/7 Mol-Instruction benchmarks.

</div>
</div>

<!-- Second paper -->
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">NeurIPS 2025</div><img src='images/archs/nips_Main_structure_vn_.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**? How can foundation transformers better embed 1D–3D structures?**

[Structure-Aware Fusion with Progressive Injection for Multimodal Molecular Representation Learning](https://neurips.cc/virtual/2025/loc/san-diego/poster/119127) [**[Code]**](https://github.com/your-username/your-project) <strong><span class='show_paper_citations' data='EXAMPLE_CITATION_ID'></span></strong>

**Zihao Jing**, Yan Sun, Yan Yi Li, Sugitha Janarthanan, Alana Deng, Pingzhao Hu

**Challenges:** Molecular modeling suffers from (1) the same entity can yield inconsistent 3D inputs, destabilizing representations; (2) naive fusion: early, symmetric mixing lets noisy 3D dominate (modality collapse).

**Our solutions:** (1) Structured Fusion Pipeline aligns 2D/3D into a stable prior, reducing 3D sensitivity. (2) Progressive Injection asymmetrically injects this prior into the main stream, preventing fusion collapse.
</div>
</div>

- 🎓  On-Going Project

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">On Going</div><img src='images/archs/on_going.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**? How can LLMs reasoning on homogeneous spacial graph?**

Scaling-Aware Adapter for Structure-Grounded LLM Reasoning <strong><span class='show_paper_citations' data='EXAMPLE_CITATION_ID'></span></strong>,
**Zihao Jing**, etc.

**Challenges:** Variable-size real-world entities strain modality token budgets and trigger structure hallucinations.
**Our solutions:** Scaling-Aware Patching combined instruction-conditioned and weighted patch pooling.

</div>
</div>

- 🎓  When I Was an Undergraduate

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Revised for a Workshop</div><img src='images/archs/workshop.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**? How can traffic forecasting transfer better across cities and networks?**

[Pruning for Generalization: A Transfer-Oriented Spatiotemporal Graph Framework](https://arxiv.org/abs/2602.04153) <strong><span class='show_paper_citations' data='EXAMPLE_CITATION_ID'></span></strong>,
**Zihao Jing**, Yuxi Long, Ganlin Feng.

**Real-World Challenge**: A Shanghai highway needs an AI traffic forecasting system, but data is scarce and transfer learning generalizes poorly.
**Our solutions:** Entropy-based criterion to prune source graphs, removing boundary nodes dominated by unobserved external traffic, then train STGCN on the controllable subgraph—improving MAE by >13%.
</div>
</div>



# 🎖 Honors and Awards
- *2023* Silver Prize of Feng Ru Cup Science and Innovation Competition (University-level).
- *2021* Third Prize, 13th National Undergraduate Mathematics Competition (National-level).
- *2021* Third Prize, 32nd Beijing Undergraduate Mathematics Competition (Province-level).
- *2021* Outstanding Student Leader Award (University-Level).
- *2021* Third Prize in Physics Academic Competition (University-Level).
- *2020* H Prize in the Mathematical Contest In Modeling.

# 📖 Educations
- *2024.09 - now)*, MSc of Computer Science, Western University. London, Canada.
- *2019.09 - 2024.06*, Bachelor of Software Engineering, Beihang Univeristy. Beijing, China.

<!-- # 💬 Invited Talks -->

# 💻 Internships

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">SenseTime</div><img src='images/company/sensetime.jpeg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Piccolo2: General Text Embedding with Multi-task Hybrid Loss Training](https://arxiv.org/abs/2405.06932) <strong><span class='show_paper_citations' data='EXAMPLE_CITATION_ID'></span></strong>,

- Fine-tuned 100B-parameter LLM for vertical livestream marketing domain; led model optimization and iteration, deployed in production for Sina Weibo. 
- Developed NLP embedding models; built training and evaluation pipelines, led model iterations, achieved top-1 performance on the C-MTEB benchmark.

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Jina AI</div><img src='images/company/jina.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

- Refined interfaces for Rungpt LLM product and contributed solution to the Llama community.
- Budweiser Beer's public opinion analysis: implemented LLM to reduce >13% costs in noise reduction and sentiment analysis.
- Led commercialization of a super-resolution model, including evaluation, tuning, performance testing, and pricing recommendations.


</div>
</div>
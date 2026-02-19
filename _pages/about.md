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

## Welcome to My Homepage

I am a second-year Master student at [Department of Computer Science](https://www.csd.uwo.ca/), [Western University](https://www.uwo.ca/), under the supervision of [Prof. Pingzhao Hu](https://phulab.org/).

Two first-author papers were accepted at top conferences (NeurIPS and ICLR) in my first year.

<!-- My research interests include **Large Language Models (LLMs)** and **Multimodal LLM Reasoning**, with a focus on teaching LLMs to understand the world by integrating diverse modalities. I am also interested in **AI for Science**. -->
My research interests focus on **Large Language Models (LLMs) and multimodal reasoning**, with a focus on improving LLM generalization and reliability for **socially impactful domains and AI-for-Science**. More broadly, I am open to other advanced LLM research across agent, efficient training, fairness, safety, and etc. [CV Here](/pdfs/Zihao_s_CV.pdf).



<!-- # 🔥 News
- *2022.02*: &nbsp;🎉🎉 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2022.02*: &nbsp;🎉🎉 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  -->

# 📝 Selected Publications
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

[Structure-Aware Fusion with Progressive Injection for Multimodal Molecular Representation Learning](https://neurips.cc/virtual/2025/loc/san-diego/poster/119127) [**[Code]**](https://github.com/zihao-jing/MuMo) <strong><span class='show_paper_citations' data='EXAMPLE_CITATION_ID'></span></strong>

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

- 🎓  Broader Applications

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Revised for a Workshop</div><img src='images/archs/workshop.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**? How can traffic forecasting transfer better across cities and networks?**

[Pruning for Generalization: A Transfer-Oriented Spatiotemporal Graph Framework](https://arxiv.org/abs/2602.04153) <strong><span class='show_paper_citations' data='EXAMPLE_CITATION_ID'></span></strong>,
**Zihao Jing**, Yuxi Long, Ganlin Feng.

**Real-World Challenge**: A Shanghai highway needs an AI traffic forecasting system, but data is scarce and transfer learning generalizes poorly.
**Our solutions:** Entropy-based criterion to prune source graphs, removing boundary nodes dominated by unobserved external traffic, then train STGCN on the controllable subgraph—improving MAE by >13%.
</div>
</div>

*For a complete list of publications, see [Google Scholar]({{ site.author.googlescholar }}).*

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

**LLM Research Intern** \| 2023.09--2024.06

- **Text embeddings ([Piccolo2](https://arxiv.org/abs/2405.06932)):** Trained general-purpose embedding models with multi-task hybrid-loss objectives; built end-to-end training/evaluation pipelines and led iterative optimization of a generative embedding LLM; achieved top-1 ranking on C-MTEB (May 2024).
- **Domain LLM adaptation (100B):** Fine-tuned a 100B-parameter LLM for vertical livestream marketing; drove data/recipe iteration and productionized the model for deployment at Sina Weibo.
- **LLM research, engineering & scaling:** Gained hands-on experience with large-scale pretraining/fine-tuning codebases (SenseNova series), hyperparameter tuning, experiment tracking, and reproducible training workflows on multi-GPU infrastructure.

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Jina AI</div><img src='images/company/jina.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**AI Research Intern** \| 2023.04--2023.09

- **LLM engineering:** Improved RunGPT interface and contributed solutions to the **Llama** open-source ecosystem.
- **Applied LLM:** Implemented LLM-based denoising and sentiment pipeline for Budweiser public-opinion analysis; reduced operational cost by >13%.
- **Model commercialization:** Led evaluation/tuning of a super-resolution model; executed performance testing and produced pricing recommendations.


</div>
</div>

# 🎤 Selected Talks

<div class="talks-grid" style="display: flex; flex-wrap: wrap; justify-content: center; gap: 2rem; margin: 1.5rem 0;">
  <div class="talk-block" style="text-align: center; max-width: 320px;">
    <a href="https://docs.google.com/presentation/d/105Dl92sWjmfIBvktO7sYI4vSJDk_UJZfV4EJErDOlPU/edit?usp=sharing">
      <img src="images/talks/DemystifyingLLMs.png" alt="Demystifying Large Language Models" width="100%" style="display: block; border-radius: 6px;">
      <p style="margin-top: 0.75rem; font-weight: 600;">Demystifying LLMs, From Pretrain to Adaptation, UWORCS 2025</p>
    </a>
  </div>
  <div class="talk-block" style="text-align: center; max-width: 320px;">
    <a href="https://docs.google.com/presentation/d/1STRbJ3gAZDHOUxICb0eFriS9So1DzE_k-u6HD-NNeq8/edit?usp=sharing">
      <img src="images/talks/Advanced_Attention_Mechanism.png" alt="Advanced Attention Mechanism in Transformers" width="100%" style="display: block; border-radius: 6px;">
      <p style="margin-top: 0.75rem; font-weight: 600;">Advanced Attention Mechanism, UWO Seminar</p>
    </a>
  </div>
  <div class="talk-block" style="text-align: center; max-width: 320px;">
    <a href="https://docs.google.com/presentation/d/1Ij5JzdSlkDElzGu_GH8X0KpTUmdcE581DAh5F3xsZ7o/edit?usp=sharing">
      <img src="images/talks/Deepseek.png" alt="Deepseek vs. ChatGPT" width="100%" style="display: block; border-radius: 6px;">
      <p style="margin-top: 0.75rem; font-weight: 600;">Deepseek-Advanced Reinforcement Learning Approaches, UWO Seminar</p>
    </a>
  </div>
  <div class="talk-block" style="text-align: center; max-width: 320px;">
    <a href="https://docs.google.com/presentation/d/15MNJCwaaM1xNMckSdDilzoPtEAUjXHZDLlRBIzPqN1I/edit?usp=sharing">
      <img src="images/talks/Alphafold.png" alt="AlphaFolds and All-Atom Foundation Models" width="100%" style="display: block; border-radius: 6px;">
      <p style="margin-top: 0.75rem; font-weight: 600;">AlphaFolds and All-Atom Foundation Models, UWO BioSeminar</p>
    </a>
  </div>
</div>

# 📄 Grant Proposals Written by me

<div class="proposals-grid" style="display: flex; flex-wrap: wrap; justify-content: center; gap: 2rem; margin: 1.5rem 0;">
  <div class="proposal-block" style="text-align: center; max-width: 320px;">
    <a href="/pdfs/ZIhao_Nvidia_Grant_Proposal.pdf">
      <img src="images/proposals/nvidia_grant.png" alt="Nvidia Academic Grant" width="100%" style="display: block; border-radius: 6px;">
      <p style="margin-top: 0.75rem; font-weight: 600;">Nvidia Academic Grant Program 2025</p>
    </a>
  </div>
  <div class="proposal-block" style="text-align: center; max-width: 320px;">
    <a href="/pdfs/2026_RRG_V3.2.pdf">
      <img src="images/proposals/rrg_grant.png" alt="Alliance RRG Resource Grant" width="100%" style="display: block; border-radius: 6px;">
      <p style="margin-top: 0.75rem; font-weight: 600;">Alliance (Computing Canada) RRG Grant</p>
    </a>
  </div>
</div>

# 👁 Academic Service (Reviewing)

**Conference Reviewer**  ICLR 2026 (5 papers), ICML 2026 (6 papers)

**Workshop Reviewer**  Time Series in the Age of Large Models (TSALM), ICLR 2026

**Journal Reviewer**  ACM Transactions on Knowledge Discovery from Data (TKDD)

# 📈 Technical Background

**Skills narrative.** Trained in Software Engineering, I built a broad programming foundation, then transitioned to full-stack development. Industry projects, spanning production management systems and the Shanghai Highway (G60) AI monitor&prediction system, strengthened my engineering practice, service maintenance, and high-throughput deployment, including containerized workflows and Kubernetes.

**In my third undergraduate year**, I shifted toward AI research through an internship at Jina AI, developing applied models (e.g., segmentation and sentiment analysis) and consolidating modern ML engineering skills (NumPy, PyTorch, Transformers) and professional collaborative practices.

**I then joined SenseTime as an intern**, where I worked on LLM training (SenseNova series), building practical experience in pretraining and fine-tuning, codebase organization, and hyperparameter optimization.

**During my M.Sc. in CS, Western University**, I have focused on advanced LLM for spatial geometry understanding, further deepening my large-scale training stack (multi-GPU/multi-node), HPC scheduling, and reproducible container-based experimentation.